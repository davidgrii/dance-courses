'use client';

import { Checkbox } from '@/shared/ui/checkbox';


const CheckboxWithText = ({ checked, onCheckedChange  }) => (
  <div className='items-top flex space-x-2 '>
    <Checkbox checked={checked} onCheckedChange={onCheckedChange } />
    <div className='grid gap-1.5 text-left leading-none'>
      <label
        htmlFor='terms1'
        className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
      >
        Accept terms and conditions
      </label>
      <p className='text-sm text-muted-foreground'>
        You agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  </div>
);

export default CheckboxWithText;
