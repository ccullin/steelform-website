import { Solution } from './solution';

export interface ParentSolution extends Omit<Solution, 'parent'> {
  solutionType: 'parent';
}