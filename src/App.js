import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './logo.png';
import bond1 from './bond1.jpeg'
import bond2 from './bond2.jpeg'
import loans1 from './loans1.jpeg'
import loans2 from './loans2.jpeg'
import vault1 from './vault1.jpeg'
import stake1 from './stake1.jpeg'
import msd from './msd.jpeg'
import Hamburger from './components/Hamburger'
import SideMenu from './components/SideMenu'

function App() {

  const [isMenuActive, activeMenu] = useState(false)

  return (
    <div className="App">
      <div className="" id="gatsby-focus-wrapper">
        <div className='bIMEZc'>
          <div className='section-inner desktop-version'>
            <div className='newHeader__LeftSection-sc-1f19k3t-1 fJgvVH'>
              <a className='logo-link' href='/'>
                <img src={logo} alt='Logo'></img>
              </a>
            </div>
            <div className='newHeader__CenterSection-sc-1f19k3t-2 curGpu'>
              <a href='https://maddy-protocol.gitbook.io/maddy-protocol/' className='text-link'>
                Docs
              </a>
              <a href='#' className='text-link'>
                Academy
              </a>
              <a href='#' className='text-link'>
                Leaderboard
              </a>
              <a href='#' className='text-link'>
                Earn
              </a>
              <a href='#' className='text-link'>
                Presale
              </a>
            </div>
            <div className='newHeader__RightSection-sc-1f19k3t-3 OtCnG'>
              <a href='#'>GO TO BETA</a>
              <div type="button" className='newHeader__ThemeController-sc-1f19k3t-5 fvUBmM'>
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuODgzNzIgMTQuOTk5N0M1Ljc3MjAzIDE0Ljk5OTcgMy43OTA2NiAxNC4xODEyIDIuMzA0NTMgMTIuNjk1MkMwLjgxODQwNyAxMS4yMDkxIDEuODQ2MzVlLTA3IDkuMjI3NTkgMS44NDYzNWUtMDcgNy4xMTU4N0MtMC4wMDAzMTUwNTQgNS42NTkxMiAwLjQwMzA0NCA0LjIzMDc3IDEuMTY1MzEgMi45ODkzNkMxLjkyNzU3IDEuNzQ3OTYgMy4wMTg5MiAwLjc0MjA1OCA0LjMxODIyIDAuMDgzMzEwM0M0LjQ1MTg5IDAuMDE1MTY4MyA0LjYwMjY4IC0wLjAxMjA5MTYgNC43NTE3NSAwLjAwNDkzMzIxQzQuOTAwODIgMC4wMjE5NTgxIDUuMDQxNTcgMC4wODI1MTM1IDUuMTU2NDQgMC4xNzkwNEM1LjI3MTMgMC4yNzU1NjcgNS4zNTUyIDAuNDAzNzg5IDUuMzk3NjQgMC41NDc3MDFDNS40NDAwOCAwLjY5MTYxMiA1LjQzOTIgMC44NDQ4MzYgNS4zOTUwOSAwLjk4ODI0OEM1LjAyNDMzIDIuMTg1ODEgNC45ODc4OSAzLjQ2MTkzIDUuMjg5NzEgNC42Nzg3QzUuNTkxNTMgNS44OTU0NyA2LjIyMDE0IDcuMDA2NjMgNy4xMDc1OSA3Ljg5MjA5QzcuNzQ0NDYgOC41MzM3IDguNTAyMjcgOS4wNDI2IDkuMzM3MTQgOS4zODkzNUMxMC4xNzIgOS43MzYxIDExLjA2NzQgOS45MTM4MSAxMS45NzE0IDkuOTEyMTlDMTIuNjYzIDkuOTEyNzEgMTMuMzUwNyA5LjgwODk4IDE0LjAxMTMgOS42MDQ1QzE0LjE1NDcgOS41NjAzNyAxNC4zMDggOS41NTk0NiAxNC40NTE5IDkuNjAxOUMxNC41OTU4IDkuNjQ0MzMgMTQuNzI0MSA5LjcyODIzIDE0LjgyMDYgOS44NDMxQzE0LjkxNzEgOS45NTc5OCAxNC45Nzc3IDEwLjA5ODggMTQuOTk0NyAxMC4yNDc4QzE1LjAxMTcgMTAuMzk2OSAxNC45ODQ1IDEwLjU0NzcgMTQuOTE2MyAxMC42ODE0QzE0LjI1NzUgMTEuOTgwNyAxMy4yNTE2IDEzLjA3MjEgMTIuMDEwMiAxMy44MzQzQzEwLjc2ODggMTQuNTk2NiA5LjM0MDQ4IDE1IDcuODgzNzIgMTQuOTk5N1pNNC4yOTA5NCAxLjI0Mjg0QzMuMjgzNCAxLjg1NTg3IDIuNDUxMTEgMi43MTg1NCAxLjg3NDU5IDMuNzQ3NEMxLjI5ODA3IDQuNzc2MjYgMC45OTY4MjggNS45MzY1IDEgNy4xMTU4N0MxIDEwLjkxMTYgNC4wODggMTMuOTk5NyA3Ljg4MzcyIDEzLjk5OTdDOS4wNjMxIDE0LjAwMjkgMTAuMjIzMyAxMy43MDE2IDExLjI1MjIgMTMuMTI1MUMxMi4yODExIDEyLjU0ODYgMTMuMTQzOCAxMS43MTYzIDEzLjc1NjggMTAuNzA4N0MxMy4xNzEzIDEwLjg0NDIgMTIuNTcyNCAxMC45MTI1IDExLjk3MTUgMTAuOTEyM0MxMC45MzYxIDEwLjkxNDMgOS45MTA1OCAxMC43MTA4IDguOTU0MzQgMTAuMzEzOEM3Ljk5ODEgOS45MTY3OCA3LjEzMDEgOS4zMzQwMyA2LjQwMDU5IDguNTk5MjhDNS40NTI4OSA3LjY1MzM3IDQuNzYxODcgNi40ODE1NyA0LjM5Mjc1IDUuMTk0NDZDNC4wMjM2MyAzLjkwNzM2IDMuOTg4NTkgMi41NDc0MyA0LjI5MDk0IDEuMjQzMDNWMS4yNDI4NFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=" alt=""></img>
              </div>
            </div>
          </div>
          <div className='newHeader__MobileHeader-sc-1f19k3t-4 fBprAR'>
            <div className='mobile-nav'>
              <a className='logo-link' href='/'>
              <img src={logo} alt='Logo'></img>
              </a>
              <div>
                <div className='newHeader__StyledSvg-sc-1f19k3t-7 fINqws'>
                <Hamburger className="" fill="#fff" onMenuClick={() => activeMenu(!isMenuActive)} />
                    <SideMenu isMenuActive={isMenuActive} onOverLayClick={() => activeMenu(!isMenuActive)}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='IiVeu'>
          <div className='home-page'>
            <div className='pages__HeroSection-vgtehy-6 jXTmhw'>
              <div className='section-inner'>
              <h1>Discover real decentralised finance on Maddy Protocol</h1>
              <div class="description">
                <p>Maddy protocol creates a suite of decentralised financial products</p>
                <p>Be your own banker, earning yields, take out a self paying loan and you can try out our censorship resistant stablecoin.MSD</p>
              </div>
              <a href="/" target="_blank" rel="noopener noreferrer">go to beta</a>
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAzNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuMzUzNTUgMC42NDY0NDdDMS4xNTgyOSAwLjQ1MTE4NCAwLjg0MTcwOSAwLjQ1MTE4NCAwLjY0NjQ0NyAwLjY0NjQ0N0MwLjQ1MTE4NCAwLjg0MTcwOSAwLjQ1MTE4NCAxLjE1ODI5IDAuNjQ2NDQ3IDEuMzUzNTVMMS4zNTM1NSAwLjY0NjQ0N1pNMzMuMzUzNiAxLjM1MzU1QzMzLjU0ODggMS4xNTgyOSAzMy41NDg4IDAuODQxNzA5IDMzLjM1MzYgMC42NDY0NDdDMzMuMTU4MyAwLjQ1MTE4NCAzMi44NDE3IDAuNDUxMTg0IDMyLjY0NjQgMC42NDY0NDdMMzMuMzUzNiAxLjM1MzU1Wk0wLjY0NjQ0NyAxLjM1MzU1TDE2LjI5MjkgMTdMMTcgMTYuMjkyOUwxLjM1MzU1IDAuNjQ2NDQ3TDAuNjQ2NDQ3IDEuMzUzNTVaTTE3LjcwNzEgMTdMMzMuMzUzNiAxLjM1MzU1TDMyLjY0NjQgMC42NDY0NDdMMTcgMTYuMjkyOUwxNy43MDcxIDE3Wk0xNi4yOTI5IDE3QzE2LjY4MzQgMTcuMzkwNSAxNy4zMTY2IDE3LjM5MDUgMTcuNzA3MSAxN0wxNyAxNi4yOTI5TDE2LjI5MjkgMTdaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K" alt="arrow" title="arrow" class="arrow-down"></img>
              </div>
            </div>
            <div className='pages__PerformancesList-vgtehy-0 eXpJBp'>
            <h3>Active yielding pools across Maddy</h3>
            <h5>7 Days Average</h5>
            <div className='section-inner'>
              <div className='pages__PerformanceItem-vgtehy-1 iwhJLq'>
                <div class="item-header">
                  <p>Maddy Bonds</p>
                </div>
                <div class="item-content">
                  <div class="main-text">
                    <div class="inception">
                      <p>Return since inception:</p>
                      <p>0%</p>
                    </div>
                    <div class="annual">
                        <p>Annualized return:</p>
                        <p>0%</p>
                    </div>
                  </div>
                  <img src={bond1} alt='Maddy Bond' className='pages__StyledPercentageSvg-vgtehy-2 gxGtaP'></img>
                </div>
              </div>
              <div className='pages__PerformanceItem-vgtehy-1 iwhJLq'>
                <div class="item-header">
                  <p>Self pay loan</p>
                </div>
                <div class="item-content">
                  <div class="main-text">
                    <div class="inception">
                      <p>Return since inception:</p>
                      <p>0%</p>
                    </div>
                    <div class="annual">
                        <p>Annualized return:</p>
                        <p>0%</p>
                    </div>
                  </div>
                  <img src={loans1} alt='Maddy Self pay loans' className='pages__StyledPercentageSvg-vgtehy-2 gxGtaP'></img>
                </div>
              </div>
              <div className='pages__PerformanceItem-vgtehy-1 iwhJLq'>
                <div class="item-header">
                  <p>YIELD Vault apy</p>
                </div>
                <div class="item-content">
                  <div class="main-text">
                    <div class="inception">
                      <p>Return since inception:</p>
                      <p>0%</p>
                    </div>
                    <div class="annual">
                        <p>Annualized return:</p>
                        <p>0%</p>
                    </div>
                  </div>
                  <img src={vault1} alt='Maddy yield vault' className='pages__StyledPercentageSvg-vgtehy-2 gxGtaP'></img>
                </div>
              </div>
              <div className='pages__PerformanceItem-vgtehy-1 iwhJLq'>
                <div class="item-header">
                  <p>esMADDY/ MADDY Staking</p>
                </div>
                <div class="item-content">
                  <div class="main-text">
                    <div class="inception">
                      <p>Return since inception:</p>
                      <p>0%</p>
                    </div>
                    <div class="annual">
                        <p>Annualized return:</p>
                        <p>0%</p>
                    </div>
                  </div>
                  <img src={stake1} alt='Maddy earn' className='pages__StyledPercentageSvg-vgtehy-2 gxGtaP'></img>
                </div>
              </div>
            </div>
            </div>
            <div className='pages__AttributesList-vgtehy-3 YZWHg'>
              <div className='section-inner'>
                <div className='pages__AttributeItem-vgtehy-4 hKVsAo'>
                  <div>
                    <div class="main-image">
                    <img src={msd} alt='MSD stablecoin' className='pages__StyledPercentageSvg-vgtehy-2 gxGtaP'></img>
                    </div>
                    <div class="main-text">
                      <h3>MSD Stablecoin</h3>
                      <p class="description1">MSD is the USD-pegged stablecoin used to pay out loans on the Maddy protocol. At any time it can be redeemed against the underlying collateral at face value and can always be redeemed for 1 MSD for 1 USD worth of ETH when the MSD peg falls below $1</p>
                      <p class="description2"></p>
                    </div>
                  </div>
                  <div class="actions">
                    <a href="#" target="_blank" rel="noopener noreferrer">GO TO APP</a>
                  </div>
                </div>
                <div className='pages__AttributeItem-vgtehy-4 hKVsAo'>
                  <div>
                    <div class="main-image">
                    <img src={bond2} alt='Maddy Bond' className='pages__StyledPercentageSvg-vgtehy-2 gxGtaP'></img>
                    </div>
                    <div class="main-text">
                      <h3>Maddy Bonds</h3>
                      <p class="description1">Maddy Bonds introduces a novel bonding mechanism which allows protocols to bootstrap liquidity at minimal cost and provides better user protection than existing bonding alternatives. The bonding mechanism can be applied to yield-bearing tokens</p>
                      <p class="description2"></p>
                    </div>
                  </div>
                  <div class="actions">
                    <a href="#" target="_blank" rel="noopener noreferrer">GO TO APP</a>
                  </div>
                </div>
                <div className='pages__AttributeItem-vgtehy-4 hKVsAo'>
                  <div>
                    <div class="main-image">
                    <img src={loans2} alt='Maddy Bond' className='pages__StyledPercentageSvg-vgtehy-2 gxGtaP'></img>
                    </div>
                    <div class="main-text">
                      <h3>Maddy Self Pay Loan</h3>
                      <p class="description1"> Maddy self paying loan protocol is a future-yield-backed synthetic asset protocol. The protocol gives you advances on various yield farming strategies via a synthetic token</p>
                      <p class="description2"></p>
                    </div>
                  </div>
                  <div class="actions">
                    <a href="#" target="_blank" rel="noopener noreferrer">GO TO APP</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='pages__AcademySection-vgtehy-7 bobFdP'>
              <div className='section-inner'>
              <div class="main-image">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQxIiBoZWlnaHQ9IjEwNCIgdmlld0JveD0iMCAwIDE0MSAxMDQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik03Mi4wNzc1IDI2LjY1NzJMMTA2LjYyMyA0NC42MDE5Vjg0Ljk2ODlNNzAuODczOSA1NS45MTY4TDMuNTE4MzEgMzIuMTAyOUMwLjE2MDU2MiAzMC45MTg3IDAuMTYwNTYyIDI2LjIxNjQgMy41MTgzMSAyNS4wMjM2TDcwLjg3MzkgMS4yMTgzQzcxLjcxOTkgMC45MjQ0MTIgNzIuNjM1NyAwLjkyNDQxMiA3My40ODE2IDEuMjM1NTlMMTM3LjU0MSAyNS4wNDA4QzE0MC44MiAyNi4yNTk2IDE0MC44MiAzMC44NTgyIDEzNy41NDEgMzIuMDc3TDczLjQ4MTYgNTUuODkwOEM3Mi42NDQ0IDU2LjIwMiA3MS43MTk5IDU2LjIxMDcgNzAuODczOSA1NS45MTY4Wk0zMC43MDMgNDEuNzE0OVY2Ni44MTY3QzMwLjcwMyA2OS4wMjk1IDMyLjA5ODQgNzEuMDA5IDM0LjE5MTYgNzEuNzc4M0w2OC45OTg4IDg0LjQ1ODlDNzAuODY1MiA4NS4xNDE3IDcyLjkwNiA4NS4xNTA0IDc0Ljc4MTEgODQuNDg0OEwxMDkuOTExIDcyLjA0NjNDMTEyLjAzIDcxLjI5NDIgMTEzLjQ1MiA2OS4zMDYyIDExMy40NTIgNjcuMDc2VjQxLjAzMkw3NC45MDMyIDU0Ljg2MjJDNzMuMDgwNCA1NS41MTkyIDcxLjA4MzIgNTUuNTI3OCA2OS4yNTE3IDU0LjkwNTRMMzAuNzAzIDQxLjcxNDlaTTExMS42OSAxMDNIMTAyLjM3NkMxMDEuNzU3IDEwMyAxMDEuMjU5IDEwMi41MDcgMTAxLjI1OSAxMDEuODk0VjkxLjIwOTdDMTAxLjI1OSA4OC4wNTQ3IDEwMy44NDEgODUuNDg3NSAxMDcuMDMzIDg1LjQ4NzVDMTEwLjIxNiA4NS40ODc1IDExMi44MDcgODguMDQ2MSAxMTIuODA3IDkxLjIwOTdWMTAxLjg5NEMxMTIuODA3IDEwMi40OTkgMTEyLjMwMSAxMDMgMTExLjY5IDEwM1oiIHN0cm9rZT0idXJsKCNwYWludDBfbGluZWFyKSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iMTEuNDQ3NyIgeTE9IjkzLjk3MzQiIHgyPSIxMzkuMzEzIiB5Mj0iOS44ODM5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMxOTdDRDgiLz4KPHN0b3Agb2Zmc2V0PSIwLjQxNDU4MyIgc3RvcC1jb2xvcj0iI0Y2MDI5QyIvPgo8c3RvcCBvZmZzZXQ9IjAuNzMyMjkyIiBzdG9wLWNvbG9yPSIjRkZGMjAwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzMxRURBOSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=" alt="academy" title="academy"></img>
              </div>
              <div className='text-part'>
                <h3>Maddy Academy</h3>
                <p>Crypto investment academy will explain simply the basics of decentralized finance, how to build a solid financial strategy and which maddy protocol products will suit your goals best.</p>
                <p>You will master minting of MSD, Best yield strategy with maddy vaults, how to yield on msd stablecoin with maddy bonds, Maddy Nft lending, basics of maddy self paying loans and more. We will demystify investing to get you on the right track towards your true financial independence.</p>
                <div class="actions">
                  <a href="#">Learn more</a>
                </div>
              </div>
              </div>
            </div>
            <div className='pages__Partners-vgtehy-5 fYBxfO'>
              <div className='section-inner'>
              <h3>Partners</h3>
              <div className='partners-list'>
                <div class="pages__AlamedaSection-vgtehy-9 hlKoWF"></div>
                <div class="pages__StyledSvg-vgtehy-8 kEBmwH">
                <img src="https://bridge.arbitrum.io/static/media/HeaderArbitrumLogoMainnet.ef421edd.webp" alt="Arbitrum logo" className='ssi'></img>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className='jIzrhC'>
          <div className='section-inner'>
            <div className='newFooter__LeftLinksGroup-sc-6ylsgb-1 eXWWOK'>
              <div>
                <a href="https://twitter.com/maddyprotocol" target="_blank" rel="noopener noreferrer">
                  <div class="newFooter__StyledSvg-sc-6ylsgb-3 cEQNlM">
                    <svg width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.6887 0.966093C26.8606 1.44712 24.9594 2.14611 24.0217 2.14611V2.14755C22.951 1.13323 21.4437 0.5 19.772 0.5C16.5252 0.5 13.8925 2.88761 13.8925 5.83091C13.8925 6.23986 13.9447 6.63875 14.0413 7.02127H14.0404C9.63617 6.91645 4.81935 4.91452 1.91963 1.48819C0.136799 4.28675 1.6796 7.3992 3.70278 8.53327C3.01023 8.58066 1.73533 8.4609 1.13525 7.92991C1.09503 9.78738 2.07987 12.2485 5.67087 13.1414C4.97927 13.4788 3.75503 13.382 3.22272 13.3102C3.40955 14.8782 5.83078 16.9281 8.47843 16.9281C7.53477 17.918 3.9843 19.7135 0 19.1423C2.70592 20.6353 5.8596 21.5 9.19758 21.5C18.6833 21.5 26.0499 14.5281 25.6535 5.92741C25.6519 5.91793 25.6519 5.90845 25.6509 5.89811C25.6519 5.876 25.6535 5.85389 25.6535 5.83091C25.6535 5.8042 25.6509 5.77893 25.65 5.75309C26.5135 5.2175 27.6722 4.27009 28.5 3.02316C28.0199 3.26295 26.5797 3.74312 25.2396 3.8623C26.0997 3.44129 27.3739 2.06254 27.6887 0.966093Z"></path></svg>
                  </div>
                </a>
              </div>
              <div>
                <a href="https://t.me/maddyprotocol" target="_blank" rel="noopener noreferrer">
                  <div class="newFooter__StyledSvg-sc-6ylsgb-3 cEQNlM">
                    <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.24587 10.448L19.222 3.32891C20.8998 2.59014 26.5836 0.210708 26.5836 0.210708C26.5836 0.210708 29.2041 -0.825495 28.9873 1.69785C28.9118 2.73406 28.3274 6.37036 27.743 10.3041L25.9238 21.9518C25.9238 21.9518 25.7824 23.6596 24.5382 23.957C23.294 24.2545 21.258 22.9208 20.8904 22.6234C20.5982 22.4027 15.4233 19.0639 13.5287 17.4328C12.8972 17.001 12.7369 16.1279 13.1611 15.4851C13.2742 15.3124 13.425 15.1685 13.6041 15.063C16.2245 12.6164 19.3634 9.57492 21.2486 7.64643C22.1252 6.75414 23.0018 4.68173 19.3539 7.20508L9.09853 14.2282C8.0334 14.7176 6.82688 14.7463 5.7429 14.305C3.55608 13.6334 1.01108 12.7507 1.01108 12.7507C1.01108 12.7507 -0.742149 11.6377 2.24587 10.448Z"></path></svg>
                  </div>
                </a>
              </div>
              <div>
                <a href="#discord" target="_blank" rel="noopener noreferrer">
                  <div class="newFooter__StyledSvg-sc-6ylsgb-3 cEQNlM">
                    <svg width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.5846 19.0022C20.3227 19.9126 21.2085 20.9705 21.2085 20.9705C26.3599 20.8074 28.4859 17.6187 28.6953 17.3047C28.7069 17.2873 28.7126 17.2787 28.7126 17.28C28.7126 9.43138 25.1697 3.059 25.1697 3.059C21.6513 0.426397 18.2806 0.500208 18.2806 0.500208L17.9362 0.89387C22.1188 2.14866 24.0625 3.99394 24.0625 3.99394C21.5037 2.61613 18.9941 1.92723 16.6568 1.65659C14.8853 1.45976 13.1876 1.50896 11.6868 1.70579C11.5579 1.70579 11.4478 1.72454 11.3237 1.74568C11.3056 1.74875 11.2873 1.75188 11.2685 1.755C10.4074 1.85342 8.31608 2.14866 5.68347 3.30504C4.77313 3.6987 4.23185 3.99394 4.23185 3.99394C4.23185 3.99394 6.24936 2.05025 10.678 0.795455L10.432 0.500208C10.432 0.500208 7.08589 0.426397 3.54294 3.059C3.54294 3.059 0 9.43138 0 17.28C0 17.28 2.06672 20.8229 7.50415 20.9952C7.50415 20.9952 8.41449 19.9126 9.15261 18.9776C6.02793 18.0427 4.84695 16.099 4.84695 16.099C4.84695 16.099 5.09298 16.2712 5.53585 16.5173C5.55106 16.5173 5.56626 16.5267 5.58728 16.5397C5.60027 16.5477 5.61547 16.5571 5.63427 16.5665C5.67117 16.5911 5.70808 16.6095 5.74498 16.628C5.78189 16.6464 5.81879 16.6649 5.8557 16.6895C6.47079 17.0339 7.08589 17.3046 7.65177 17.526C8.66053 17.9443 9.86612 18.3133 11.2685 18.584C13.1138 18.9284 15.2789 19.0515 17.6409 18.6086C18.7973 18.3872 19.9783 18.0673 21.2085 17.5506C22.0696 17.2308 23.0291 16.7633 24.0379 16.099C24.0379 16.099 22.8077 18.0919 19.5846 19.0022ZM16.2372 12.2855C16.2372 10.7847 17.3444 9.5791 18.7468 9.5791C20.1246 9.5791 21.2564 10.7847 21.2564 12.2855C21.2564 13.7863 20.1492 14.9919 18.7468 14.9919C17.369 14.9919 16.2372 13.7863 16.2372 12.2855ZM7.25684 12.2855C7.25684 10.7847 8.36401 9.5791 9.76642 9.5791C11.1688 9.5791 12.3006 10.7847 12.276 12.2855C12.276 13.7863 11.1688 14.9919 9.76642 14.9919C8.38861 14.9919 7.25684 13.7863 7.25684 12.2855Z"></path></svg>
                  </div>
                  </a>
              </div>
              <div>
                <a href="https://maddyprotocol.medium.com" target="_blank" rel="noopener noreferrer">
                  <div class="newFooter__StyledSvg-sc-6ylsgb-3 cEQNlM">
                    <svg width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.87955 4.78395C3.91496 4.45924 3.78155 4.1383 3.52031 3.91975L0.859243 0.944444V0.5H9.12185L15.5084 13.5L21.1232 0.5H29V0.944444L26.7248 2.96914C26.5286 3.10791 26.4313 3.33599 26.472 3.56173V18.4383C26.4313 18.664 26.5286 18.8921 26.7248 19.0309L28.9468 21.0556V21.5H17.7703V21.0556L20.0721 18.9815C20.2983 18.7716 20.2983 18.7099 20.2983 18.3889V6.3642L13.8985 21.4506H13.0336L5.58263 6.3642V16.4753C5.52051 16.9004 5.67262 17.3284 5.9951 17.6358L8.98879 21.0062V21.4506H0.5V21.0062L3.4937 17.6358C3.81382 17.3279 3.95707 16.8971 3.87955 16.4753V4.78395Z"></path></svg>
                  </div>
                </a>
              </div>
            </div>
            <div className='newFooter__RightLinksGroup-sc-6ylsgb-2 cOdJRs'>
              <div>
              <a href="#" target="_blank" rel="noopener noreferrer">Terms of service</a>
              </div>
              <div>Copyright © 2022 by Yummylabs</div>
            </div>
          </div>
          <div class="newFooter__BottomText-sc-6ylsgb-4 kPdpag">Maddy Protocol is not available in the United States or other prohibited jurisdictions.</div>
        </div>
      </div>
      <div id="gatsby-announcer" >
        <h1>gfhjgjjjjj</h1>
      </div>
    </div>
  );
}

export default App;
