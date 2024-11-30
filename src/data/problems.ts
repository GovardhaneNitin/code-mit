import { Problem } from '../types';

export const problems: Problem[] = [
  {
    id: 1,
    title: 'Two Sum',
    difficulty: 'Easy',
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers in the array that add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.',
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
      }
    ],
    starterCode: `function twoSum(nums: number[], target: number): number[] {
    // Your code here
}`
  },
  {
    id: 2,
    title: 'Reverse String',
    difficulty: 'Easy',
    description: 'Write a function that reverses a string. The input string is given as an array of characters.',
    examples: [
      {
        input: '["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      }
    ],
    starterCode: `function reverseString(s: string[]): void {
    // Your code here
}`
  }
];