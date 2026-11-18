import { SolutionType } from './solutionType';

export interface ParentSolutionType extends Omit<SolutionType, 'parent'> {
  solutionType: 'parent';
}