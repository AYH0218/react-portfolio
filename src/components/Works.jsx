import React from 'react';

const Works = () => {
  return (
    <div className="container">
      <h1>WORKS</h1>
      <div className="lower-page">
        <div className="mt-4 mb-4">
          <h2 className="mb-3">Webアプリ</h2>
          <ul>
            <li>
              <a href="https://react-w-weather.netlify.app/" className="text-secondary" target="_blank" rel="noreferrer">
                World Weather App
              </a>
              <p>React、TypeScriptで天気アプリを作成しました。</p>
            </li>
            <li>
              <a href="https://react-c-tracker.netlify.app/" className="text-secondary" target="_blank" rel="noreferrer">
                Covid Tracker App
              </a>
              <p>
                Reactで感染者数取得アプリを作成しました。
                <br />
                <small>(取得先は現在仮データ)</small>
              </p>
            </li>
          </ul>
        </div>
        <div className="mt-4 mb-4">
          <h2>ECサイト</h2>
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
                <small>(サイト内容縮小・停止中。)</small>
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
              <p>コーディング、レスポンシブ対応など。</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Works;
