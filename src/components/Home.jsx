import React from 'react';
import jsImage from '../Images/js.png';
import reactImage from '../Images/react.png';
import nextjsImage from '../Images/nextjs.png';
import profileImage from '../Images/neko.jpg';

const Home = () => {
  return (
    <div className="container text-center">
      <h1>Ayuha</h1>

      <img src={profileImage} className="profileImage" alt="" />

      <p>
        千葉県出身。 <br />
        音楽活動、ネットワークエンジニア、Webデザイナー/エンジニア等を経て現在に至る。
      </p>
      <p>
        <a
          href="https://github.com/AYH0218"
          target="_blank"
          rel="noreferrer"
          className="iconLink"
        >
          <i class="fa-brands fa-github"></i>
        </a>
      </p>
      <section class="page-section" id="services">
        <div className="service">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
            <h3 class="section-subheading text-muted mb-5">
              私が携わった作品一覧です
            </h3>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">ECサイト</h4>
              <p class="text-muted">
                <a
                  href="https://www.hmv.co.jp/"
                  target="_blank"
                  rel="noreferrer"
                >
                  HMV&BOOKS online
                </a>
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">レスポンシブ</h4>
              <p class="text-muted">Text</p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">ウェブ</h4>
              <p class="text-muted">Text</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skill">
        <div class="text-center">
          <h1 class="title">スキル</h1>
          <div class="row text-center">
            <div class="col-md-4 services">
              <img src={jsImage} alt="" />
              <h4>HTML/CSS/JS</h4>
              <p>HTML/CSS/JavaScriptが使えます。</p>
            </div>
            <div class="col-md-4 services">
              <img src={reactImage} alt="" />
              <h4>React</h4>
              <p>Reactが使えます。</p>
            </div>
            <div class="col-md-4 services">
              <img src={nextjsImage} alt="" />
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
