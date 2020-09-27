import {WfStageReviewerVm} from './WfStageReviewerVm';

export class WfStageVm {
  id: number;
  name: string;
  status?: boolean;
  requiredReviewer: number;
  reviewers: WfStageReviewerVm[];
}
