import React from 'react';
import Header from 'next/head';
import { Box, IconButton, HStack, VStack } from '@chakra-ui/react';
import { Playground, Templates, CreateTemplate } from '../components';
import { FiGithub, FiPlus } from 'react-icons/fi';
import { ImLab } from 'react-icons/im';
import { ModalUtils } from '../utils';

export type ScreenId = 'playround' | 'templates' | 'create-template';

export default function HomePage() {
  const [screenId, setScreenId] = React.useState<ScreenId>('playround');
  const navigate = React.useCallback(
    (moveTo: ScreenId) => {
      if (screenId == moveTo) return;
      if (screenId == 'create-template') {
        ModalUtils.warning.onOpen({ continue: () => setScreenId(moveTo) });
        return;
      }
      setScreenId(moveTo);
    },
    [screenId]
  );

  React.useEffect(() => {
    if (screenId == 'create-template') {
      const alertUser = (e: BeforeUnloadEvent) => {
        e.preventDefault()
        e.returnValue = ''
      }
      window.addEventListener('beforeunload', alertUser)
      return () => {
        window.removeEventListener('beforeunload', alertUser)
      }
    }
  }, [screenId])


  return (
    <>
      <Header>
        <title>Zoogle</title>
      </Header>
      <HStack spacing="0">
        <VStack bg="#0002" h="100vh" p="12px"> {/* 64px */}
          <IconButton onClick={() => navigate('playround')} aria-label="Play with model" icon={<FiGithub />} />
          <IconButton onClick={() => navigate('templates')} aria-label="Training area" icon={<ImLab />} />
          <IconButton onClick={() => navigate('create-template')} aria-label="Training area" icon={<FiPlus />} />
        </VStack>
        <Box flex="1" display="flex" flexDir="column" p="20px 40px" h="100vh" w="calc(100vw - 64px)">
          {(() => {
            switch (screenId) {
              case 'playround':
                return <Playground />;
              case 'templates':
                return <Templates router={setScreenId} />;
              case 'create-template':
                return <CreateTemplate />;
            }
          })()}
        </Box>
      </HStack>
    </>
  );
}
