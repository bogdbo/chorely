import React, { useMemo } from 'react';
import { isAfter, parseISO } from 'date-fns';
import { ChoreListItem } from 'srcRootDir/pages/chores/ChoreListItem';
import { Box, CircularProgress, styled, Typography } from '@mui/material';

interface ChoreListProps {
  chores: Array<Assignment> | undefined;
  onComplete?: () => void;
  areDone: boolean;
}

export function ChoreList({ chores, onComplete, areDone }: ChoreListProps) {
  const sortedChores = useMemo(() => {
    return (
      chores &&
      chores.sort((first, second) => {
        if (!first.due_by_utc && second.due_by_utc) {
          return 1;
        }

        if (first.due_by_utc && !second.due_by_utc) {
          return -1;
        }

        if (first.due_by_utc && second.due_by_utc) {
          return isAfter(parseISO(first.due_by_utc), parseISO(second.due_by_utc)) ? 1 : -1;
        }

        return isAfter(parseISO(first.assigned_at_utc), parseISO(second.assigned_at_utc)) ? -1 : 1;
      })
    );
  }, [chores]);

  if (!sortedChores) {
    return (
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" margin="2rem">
        <CircularProgress />
        <Typography variant="body1" marginTop="2rem">
          Loading...
        </Typography>
      </Box>
    );
  }

  if (sortedChores.length === 0) {
    return (
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" margin="2rem">
        <Typography variant="h2" marginBottom="1rem">
          🎉
        </Typography>
        <Typography variant="body1">All your chores are done!</Typography>
      </Box>
    );
  }

  return (
    <StyledList>
      {sortedChores.map(ch => {
        return <ChoreListItem key={ch.id} assignment={ch} onComplete={onComplete} isDone={areDone} />;
      })}
    </StyledList>
  );
}

const StyledList = styled('div')`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 1.5rem;

  & > * {
    margin-bottom: 1rem;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;
