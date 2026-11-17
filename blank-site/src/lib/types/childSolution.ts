import { Solution } from './solution';

export interface ChildSolution extends Solution {
  solutionType: 'child';
  parent: {
    _id: string;
    title: string;
    slug: string;
  };
}