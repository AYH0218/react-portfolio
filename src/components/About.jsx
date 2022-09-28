import React from 'react';

const About = () => {
  return (
    <div className="container">
      <h1>About</h1>
      <div className="lower-page">
        <div className="mt-4 mb-5">
          <h2 className="mb-3">経歴</h2>
          <p>IT系専門学校の情報ネットワーク科を卒業後、ネットワークエンジニアとして従事。</p>
          <p>
            その後、ボーカリストとしての音楽活動、Webデザイナー/エンジニアを経て、2021年にマルタ共和国へ語学留学。
            <br />
            留学に関する書籍と写真集を電子出版。
          </p>
          <p>現在、フロントエンド、Webエンジニアの道を追求中。</p>
        </div>
        <div className="mt-4 mb-4">
          <h2 className="mb-3">スキル</h2>
          <p>
            HTML、CSS、Sass、JavaScript、jQueryによるコーディング。
            <br />
            Reactの基本的な知識。
            <br />
            Next.js、TypeScriptの基礎知識。
          </p>
          <p>
            Photoshop、Illustratorによるデザイン制作。
            <br />
            Davinch Resolveによる動画編集、カラーグレーディング。
            <br />
            フルサイズミラーレスカメラによる4K動画、写真撮影。
            <br />
            DAW(FL Studio)を使用した楽曲制作。
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
