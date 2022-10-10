import React from 'react';
import jsImage from '../Images/js.png';
import reactImage from '../Images/react.png';
import nextjsImage from '../Images/nextjs.png';
import profileImage from '../Images/neko.jpg';
import { ReactComponent as ZennIcon } from '../Images/zenn.svg';

const Home = () => {
  return (
    <div className="container text-center">
      <h1>Ayuha</h1>

      <img src={profileImage} className="profileImage" alt="" />

      <p>
        千葉県出身。 <br />
        音楽活動、Webデザイナー/エンジニア等を経て現在に至る。
      </p>
      <p>
        <a href="https://github.com/AYH0218" target="_blank" rel="noreferrer" className="iconLink">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://zenn.dev/ayh" target="_blank" rel="noreferrer" className="iconLink">
          <ZennIcon />
        </a>
      </p>
      <section className="page-section" id="services">
        <div className="service">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">PORTFOLIO</h2>
            <p className="section-subheading text-muted mb-5">私が携わった作品の一例です</p>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fas fa-solid fa-pager fa-stack-1x icon-color"></i>
              </span>
              <i class="fa-solid fa-memo"></i>
              <h4 className="my-3">Webアプリ</h4>
              <p className="text-muted">
                <a href="https://react-w-weather.netlify.app/" className="text-secondary" target="_blank" rel="noreferrer">
                  World Weaher App
                </a>
              </p>
              <p className="text-left">React、TypeScriptで天気アプリを作成しました。</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fas fa-shopping-cart fa-stack-1x icon-color"></i>
              </span>
              <h4 className="my-3">ECサイト</h4>
              <p className="text-muted">
                <a href="https://www.hmv.co.jp/" className="text-secondary" target="_blank" rel="noreferrer">
                  HMV&BOOKS online
                </a>
              </p>
              <p className="text-left">Webデザイン、コーディング、UI/UXの改善と実装など、全般的に携わりました。</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fas fa-laptop fa-stack-1x icon-color"></i>
              </span>
              <h4 className="my-3">公式サイト</h4>
              <p className="text-muted">
                <a href="https://www.hmv.co.jp/hmvmusic/" className="text-secondary" target="_blank" rel="noreferrer">
                  HMVmusic
                </a>
              </p>
              <p className="text-left">
                音楽配信サービスのWebサイト全体を構築しました。
                <br />
                <small>(サービス終了のためサイト内容縮小・停止。)</small>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skill">
        <div className="text-center pb-5">
          <h2 className="section-heading text-uppercase">スキル</h2>
          <div className="row text-center">
            <div className="col-md-4 services">
              <img src={jsImage} alt="" />
              <h4>HTML/CSS/JS</h4>
              <p>HTML/CSS/JavaScriptが使えます。</p>
            </div>
            <div className="col-md-4 services">
              <img src={reactImage} alt="" />
              <h4>React</h4>
              <p>Reactが使えます。</p>
            </div>
            <div className="col-md-4 services">
              <img src={nextjsImage} className="border" alt="" />
              <h4>Next.js</h4>
              <p>基本的な知識があります。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
