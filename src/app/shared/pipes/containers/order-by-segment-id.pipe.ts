import {Pipe, PipeTransform} from '@angular/core';
import {SegmentScoreContainer} from '../../model/results/scores/segment-score-container.model';

@Pipe({
  name: 'OrderBySegmentIdPipe'
})
export class OrderBySegmentIdPipe implements PipeTransform {

  /**
   * Returns the provided array of SegmentScoreContainer sorted by their id.
   *
   * @param {Array<SegmentScoreContainer>} array
   * @param {boolean} desc
   * @return {Array<SegmentScoreContainer>}
   */
  public transform(array: Array<SegmentScoreContainer>, desc: boolean = true): Array<SegmentScoreContainer> {
    if (!array || array.length === 0) {
      return [];
    }
    const results = array.sort((a: SegmentScoreContainer, b: SegmentScoreContainer) => {
        return a.segmentId.localeCompare(b.segmentId);
      }
    );
    return results;
  }
}