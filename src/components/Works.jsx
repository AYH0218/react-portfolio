import React from 'react';

const Works = () => {
  return (
    <div className="container">
      <h1>WORKS</h1>
      <div className="lower-page">
        <div className="mt-4 mb-5">
          <h2 className="mb-3">ECサイト</h2>
          <ul>
            <li>
              <a href="https://www.hmv.co.jp/" className="text-secondary" target="_blank" rel="noreferrer">
                HMV&BOOKS online
              </a>
              <p>Webデザイン、コーディング、UI/UXの改善と実装など、全般的に携わりました。</p>
            </li>
          </ul>
        </div>
        <div className="mt-4 mb-4">
          <h2>公式サイト</h2>
          <ul>
            <li>
              <a href="https://www.hmv.co.jp/hmvmusic/" className="text-secondary" target="_blank" rel="noreferrer">
                HMVmusic
              </a>
              <p>
                音楽配信サービスのWebサイト全体を一から構築しました。
                <br />
                <small>(サービス終了のためサイト内容縮小・停止。)</small>
              </p>
            </li>
          </ul>
        </div>
        <div className="mt-4 mb-4">
          <h2>LP</h2>
          <ul>
            <li>
              <a
                href="https://www.hmv.co.jp/news/article/1904261024/"
                className="text-secondary"
                target="_blank"
                rel="noreferrer"
              >
                天気の子特集ページ
              </a>
              <p>画像制作、コーディング、レスポンシブ対応など。</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Works;
