import { Proposal } from '../types/Proposal';

interface DesktopProposalCardProps {
  proposal: Proposal;
  selectedProposal: Proposal | null;
  setSelectedProposal: (proposal: Proposal | null) => void;
}

export const DesktopProposalCard: React.FC<DesktopProposalCardProps> = ({
  proposal,
  selectedProposal,
  setSelectedProposal,
}) => {
  return (
    <div
      key={proposal.id}
      className={`flex flex-row items-center p-3 cursor-pointer border-tiny border-gray-700 ${
        selectedProposal && selectedProposal.id === proposal.id
          ? 'bg-gray-600'
          : 'bg-gray-800'
      }`}
      onClick={() => {
        if (selectedProposal && selectedProposal.id === proposal.id) {
          setSelectedProposal(null);
        } else {
          setSelectedProposal(proposal);
        }
      }}
    >
      <div className={`flex flex-col items-center w-16 h-12 `}>
        <h3 className="text-xl font-semibold text-white">{proposal.id}</h3>
        <p
          className={`w-20 px-2 py-1 text-center font-bold rounded-full text-xs ${getStatusColor(
            proposal.status
          )}`}
        >
          {proposal.status}
        </p>
      </div>
      <div className="ml-3 w-full">
        <p className="text-gray-400 line-clamp-2">{proposal.title}</p>

        <div className="flex items-center justify-between mt-1 text-xs w-full">
          <p className="text-green-400">
            <span className="">{proposal.forVotes} FOR</span>
          </p>
          <p className="text-red-400">
            <span className="">{proposal.againstVotes} AGAINST</span>
          </p>
          <p className="text-gray-400">
            Threshold {Math.floor(proposal.dynamicQuorum)}
          </p>
        </div>
      </div>
    </div>
  );
};

function getStatusColor(status) {
  switch (status) {
    case 'Active':
      return 'text-green-400';
    case 'Succeeded':
      return 'text-green-600';
    case 'Defeated':
      return 'text-red-500';
    case 'Queued':
      return 'text-yellow-500';
    case 'Expired':
      return 'text-gray-500';
    case 'Executed':
      return 'text-purple-500';
    default:
      return 'text-gray-500';
  }
}
