import React from 'react';

const Other = () => {
  return (
    <div className="container">
      <h1>OTHER</h1>
      <div className="lower-page">
        <div className="mt-4 mb-5">
          <h2 className="mb-3">今後の計画</h2>
          <ul>
            <li>
              モダンフロントエンド技術の学習
              <p>
                JavaScript、React、Next.jsに関する知識の強化。
                <br />
                TypeScript、Tailwind CSSの理解と習得。
              </p>
            </li>
            <li>
              UI/UXデザインスキルの補填
              <p>Figmaの操作理解など。</p>
            </li>
            <li>
              語学学習
              <p>
                現在の日常会話レベルの英語力維持と向上。
                <br />
                第三言語にスペイン語を検討。
              </p>
            </li>
            <li>
              執筆・出版
              <p>健康やメンタルに関するライフハック/バイオハック関連の書籍や記事、今後の旅先での写真集など。</p>
            </li>
            <li>
              旅<p>留学中に知り合ったコロンビアの友人(の豪邸)を訪ね、南米を旅する計画。</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Other;
