import React from 'react';
import { FormControl, FormLabel, Input, Text, VStack } from '@chakra-ui/react';
import { FormProps } from './';

export const GeneralInfoForm = ({ parentForm }: FormProps) => {
  return (
    <VStack mt="10px" align="start">
      <Text fontSize="24px" fontWeight="800">
        Template General Information (1/4)
      </Text>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input {...parentForm.register('name')} />
      </FormControl>
    </VStack>
  );
};
