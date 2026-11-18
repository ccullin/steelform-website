import { SolutionType } from './solutionType';

export interface ChildSolutionType extends SolutionType {
  solutionType: 'child';
  parent: {
    _id: string;
    title: string;
    slug: string;
  };
}