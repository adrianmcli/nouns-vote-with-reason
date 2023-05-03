import useSWR from 'swr';
import { VoteWithLikes } from '../lib/types/VoteWithLikes';
import { useVoteDirections } from './useVoteDirections';

export function useVotesForProposal(id: string) {
  const { data, ...rest } = useSWR<VoteWithLikes[]>(
    `/api/proposals/${id}/votes`
  );

  const { forVotes, againstVotes } = useVoteDirections(data);

  return { forVotes, againstVotes, ...rest };
}
