import '@mantine/core/styles.css';
import { Container, MantineProvider, Title } from '@mantine/core';
import { PasswordGenerator } from './PasswordGenerator';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Container id='container' maw={400}>
        <Title mt={'sm'} order={2}>
          パスワード一括生成ツール
        </Title>
        <Title order={6} mb={'sm'} c={'dimmed'}>
          安全なパスワードを一括で作成します。
        </Title>
        <PasswordGenerator />
      </Container>
    </MantineProvider>
  );
}
