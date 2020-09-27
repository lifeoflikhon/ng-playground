import {Component, Input, OnInit, Output} from '@angular/core';
import {WfStageVm} from './models/WfStageVm';
import {stages} from './data/stages';

@Component({
  selector: 'app-wf-process',
  templateUrl: './wf-process.component.html',
  styleUrls: ['./wf-process.component.scss']
})

export class WfProcessComponent implements OnInit {
  @Input() public stages: WfStageVm[];
  public approvedReviewers: any[];
  @Output() public reviewerComment: string;

  constructor() {}

  ngOnInit(): void {
    this.stages = stages;
    this.approvedReviewers = [];
    this.approvedByReviewer();
    this.checkStageStatus();
  }
  approvedByReviewer(): void {
    this.stages.map((stage) => {
      let count = 0;
      stage.reviewers.map(reviewer => {
        if (reviewer.status) {
          count++;
        }
      });
      this.approvedReviewers.push(count);
    });
  }
  checkStageStatus(): void {
    this.stages.map((stage, i) => {
      stage.reviewers.map((reviewer, j) => {
        if (reviewer.status === false) {
          stage.status = false;
        }
        if (stage.status !== false) {
          if (this.approvedReviewers[i] === stage.requiredReviewer) {
            stage.status = true;
          }
        }
      });
    });
  }
  getColor(s): any {
    if (s.status === undefined) {
      return 'darkblue';
    } else if (s.status === true) {
      return 'green';
    } else {
      return 'darkred';
    }
  }

  getClass(s): any {
    if (s.status === undefined) { return 'pending'; }
    else if (s.status === true) { return 'approved'; }
    else { return 'rejected'; }
  }

  setComment($event): void {
    this.reviewerComment = $event.target.value;
  }

  getComment($event): any {
    $event.preventDefault();
    return this.reviewerComment;
  }
}
