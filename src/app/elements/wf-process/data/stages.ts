import {WfStageVm} from '../models/WfStageVm';

export const stages: WfStageVm[] = [
  {
    id: 0,
    name: 'stage 1',
    requiredReviewer: 2,
    reviewers: [
      {
        id: 0,
        name: 'md. abdul kader',
        avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`,
        comment: 'I am approving this wired thing to buy.',
        timestamp: '12/09/2020 10:08 AM',
      },
      {
        id: 1,
        name: 'md. Babul Islam',
        avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`,
        comment: 'I am approving this wired thing to buy. Good stuffs.',
        timestamp: '12/09/2020 11:08 AM',
      },
      {
        id: 2,
        name: 'md. Chawdhury Kallu',
        avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`,
        comment: 'I am approving this wired thing to buy.',
        timestamp: '12/09/2020 01:18 PM',
      }
    ]
  },
  {
    id: 0,
    name: 'stage 1',
    requiredReviewer: 1,
    reviewers: [
      {
        id: 0,
        name: 'md. abdul kader',
        avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`,
        comment: 'I am approving this wired thing to buy.',
        timestamp: '12/09/2020 10:08 AM',
      },
      {
        id: 1,
        name: 'md. Babul Islam',
        avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`,
        comment: 'I am approving this wired thing to buy. Good stuffs.',
        timestamp: '12/09/2020 11:08 AM',
      },
    ]
  },
  {
    id: 0,
    name: 'stage 1',
    requiredReviewer: 3,
    reviewers: [
      {
        id: 0,
        name: 'md. abdul kader',
        avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`,
        comment: 'I am approving this wired thing to buy.',
        timestamp: '12/09/2020 10:08 AM',
      },
      {
        id: 1,
        name: 'md. Babul Islam',
        avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`,
        comment: 'I am approving this wired thing to buy. Good stuffs.',
        timestamp: '12/09/2020 11:08 AM',
      },
      {
        id: 0,
        name: 'md. abdul kader',
        avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`,
        comment: 'I am approving this wired thing to buy.',
        timestamp: '12/09/2020 10:08 AM',
      },
      {
        id: 1,
        name: 'md. Babul Islam',
        avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`,
        comment: 'I am approving this wired thing to buy. Good stuffs.',
        timestamp: '12/09/2020 11:08 AM',
      }
    ]
  }
];
