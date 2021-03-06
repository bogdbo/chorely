import React from 'react';
import useSWR, { mutate } from 'swr';
import { fetcher } from 'srcRootDir/common/services/fetcher';
import { useParams } from 'react-router-dom';
import { Tab } from '@headlessui/react';
import { Button } from 'srcRootDir/common/components';
import { GroceryItem } from 'srcRootDir/entries/shopping/manage/ManageGroceriesPage/components/GroceryItem';
import { addGroceryToRecipe, deleteGroceryFromRecipe } from 'srcRootDir/entries/shopping/services/shopping';
import { toast } from 'react-toastify';

export function ManageRecipePage(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const cacheKey = `/shopping/recipes/${id}`;

  const recipe = useSWR<Recipe>(cacheKey, {
    fetcher,
    refreshInterval: 0,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  const groceriesResponse = useSWR<Array<Grocery>>('/shopping/groceries', {
    fetcher,
    refreshInterval: 0,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  const handleAddGroceryToRecipe = async (grocery: Grocery) => {
    if (!id) {
      return;
    }

    await addGroceryToRecipe(id, grocery.id);
    toast.success(`Added "${grocery.name}".`);
    await mutate(cacheKey);
  };

  return (
    <div className="flex flex-col justify-center w-full items-center p-4">
      <Tab.Group>
        <Tab.List className="flex">
          <Tab as="div">
            <Button>Recipe details</Button>
          </Tab>
          <Tab as="div">
            <Button>Add groceries</Button>
          </Tab>
        </Tab.List>
        <Tab.Panels className="flex flex-col w-full">
          <Tab.Panel>
            <div className="w-full h-full grid grid-cols-[1fr_1fr]">
              {recipe.data?.groceries?.map((grocery, i) => (
                <GroceryItem
                  key={`${grocery.id}${i}`}
                  item={grocery}
                  onDelete={async () => {
                    if (id && confirm(`Are you sure you want to remove "${grocery.name}" from the recipe?`)) {
                      await deleteGroceryFromRecipe(id, grocery.id);
                      await recipe.mutate();
                    }
                  }}
                />
              ))}
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="w-full h-full grid grid-cols-[1fr_1fr]">
              {groceriesResponse.data?.map(grocery => (
                <GroceryItem key={grocery.id} item={grocery} onClick={() => handleAddGroceryToRecipe(grocery)} />
              ))}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
