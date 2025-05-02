# ts実行

```bash
node --import tsx --env-file .env --watch ./src/scripts/hello.ts
```

パスワード一括生成ツールを作成したい

フォームで設定できるパラメーター
- パスワードの長さ 4~20 数字入力ではなくセレクトボックスで選ぶようにする　デフォルト８
- 使用する文字タイプ
  - 小文字(a-z)
  - 大文字(A-Z)
  - 数字(1-0)
  - 記号 !@#$%^&*
- 似た文字を除外 デフォルトOFF
  - これにチェックいれると1,l,I,0,Oが除外される

「パスワード生成」ボタンをクリックすると下に要件を満たしたパスワードが１０個生成される

パスワード生成ロジックは以下を参考にすること　Math.random()は使うな！！

```ts
export const generatePassword = (length: number): string => {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from(crypto.getRandomValues(new Uint32Array(length)))
    .map(value => characters[value % characters.length])
    .join('');
};
```
