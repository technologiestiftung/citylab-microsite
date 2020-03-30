<template>
  <a target="_blank" href="https://hackthecrisis.citylab-berlin.org">
    <div class="ticker-wrap">
      <div class="ticker">
        <div class="ticker__item">
          <div class="flex">

            <div class="flex">
              <svg style="margin-right: 10px; transform: translateY(3px);" width="33px" height="33px" viewBox="-1 -1 35 35">
                <g id="Group-8">
                    <circle id="Oval-Copy-2" stroke="#FFFFFF" fill="none" stroke-width="1.44" cx="14.88" cy="15.36" r="6.72"></circle>
                    <circle id="Oval-Copy-2" stroke="#FFFFFF" fill="none" stroke-width="0.96" cx="14.88" cy="15.36" r="3.84"></circle>
                    <circle id="Oval-Copy" stroke="#FFFFFF" fill="none" stroke-width="1.44" cx="15.36" cy="2.4" r="2.4"></circle>
                    <rect id="Rectangle" fill="#FFFFFF" x="14.88" y="4.8" width="1" height="3.84"></rect>
                    <circle id="Oval-Copy" stroke="#FFFFFF" fill="none" stroke-width="1.44" transform="translate(2.400000, 15.360000) rotate(-90.000000) translate(-2.400000, -15.360000) " cx="2.4" cy="15.36" r="2.4"></circle>
                    <rect id="Rectangle" fill="#FFFFFF" transform="translate(6.720000, 15.360000) rotate(-90.000000) translate(-6.720000, -15.360000) " x="6.24" y="13.44" width="1" height="3.84"></rect>
                    <circle id="Oval-Copy" stroke="#FFFFFF" fill="none" stroke-width="1.44" transform="translate(28.320000, 15.360000) rotate(-270.000000) translate(-28.320000, -15.360000) " cx="28.32" cy="15.36" r="2.4"></circle>
                    <rect id="Rectangle" fill="#FFFFFF" transform="translate(24.000000, 15.360000) rotate(-270.000000) translate(-24.000000, -15.360000) " x="23.52" y="13.44" width="1" height="3.84"></rect>
                    <circle id="Oval-Copy" stroke="#FFFFFF" fill="none" stroke-width="1.44" transform="translate(24.524104, 24.524104) rotate(-225.000000) translate(-24.524104, -24.524104) " cx="24.5241039" cy="24.5241039" r="2.4"></circle>
                    <rect id="Rectangle" fill="#FFFFFF" transform="translate(21.469403, 21.469403) rotate(-225.000000) translate(-21.469403, -21.469403) " x="20.9894026" y="19.5494026" width="1" height="3.84"></rect>
                    <circle id="Oval-Copy" stroke="#FFFFFF" fill="none" stroke-width="1.44" transform="translate(6.195896, 6.195896) rotate(-405.000000) translate(-6.195896, -6.195896) " cx="6.19589612" cy="6.19589612" r="2.4"></circle>
                    <rect id="Rectangle" fill="#FFFFFF" transform="translate(9.250597, 9.250597) rotate(-405.000000) translate(-9.250597, -9.250597) " x="8.77059741" y="7.33059741" width="1" height="3.84"></rect>
                    <circle id="Oval-Copy" stroke="#FFFFFF" fill="none" stroke-width="1.44" transform="translate(24.524104, 6.195896) rotate(-315.000000) translate(-24.524104, -6.195896) " cx="24.5241039" cy="6.19589612" r="2.4"></circle>
                    <rect id="Rectangle" fill="#FFFFFF" transform="translate(21.469403, 9.250597) rotate(-315.000000) translate(-21.469403, -9.250597) " x="20.9894026" y="7.33059741" width="1" height="3.84"></rect>
                    <circle id="Oval-Copy" stroke="#FFFFFF" fill="none" stroke-width="1.44" transform="translate(6.195896, 24.524104) rotate(-495.000000) translate(-6.195896, -24.524104) " cx="6.19589612" cy="24.5241039" r="2.4"></circle>
                    <rect id="Rectangle" fill="#FFFFFF" transform="translate(9.250597, 21.469403) rotate(-495.000000) translate(-9.250597, -21.469403) " x="8.77059741" y="19.5494026" width="1" height="3.84"></rect>
                    <circle id="Oval-Copy" stroke="#FFFFFF" fill="none" stroke-width="1.44" transform="translate(15.360000, 28.320000) rotate(-180.000000) translate(-15.360000, -28.320000) " cx="15.36" cy="28.32" r="2.4"></circle>
                    <rect id="Rectangle" fill="#FFFFFF" transform="translate(15.360000, 24.000000) rotate(-180.000000) translate(-15.360000, -24.000000) " x="14.88" y="22.08" width="1" height="3.84"></rect>
                </g>
              </svg>
              <span style="margin-right: 5px" class="logo-highlight"><b>Hack The Crisis</b></span>
              <span class="logo-transparent"><b>Berlin</b></span>
            </div>

            <div class="ticker__description">{{ticker['description']}}</div>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
  export default {
    name: 'Ticker',
    props: {
      lang: String,
      content: Object,
    },
    computed: {
      ticker() {
          return this.content[this.lang]['ticker'];
      }
    },
  }
</script>

<style lang="scss">
  @import "../assets/style/style.scss";
  @keyframes ticker {
    0% {
      transform: translate3d(0, 0, 0);
      visibility: visible;
    }

    100% {
      transform: translate3d(-100%, 0, 0);
    }
  }

  .ticker-wrap {
    bottom: 0;
    width: auto;
    overflow: hidden;
    height: 4rem;
    background-color: $color-primary;
    padding-left: 100%;
		box-sizing: content-box;

		.logo-transparent {
			opacity: .5;
		}

    .ticker {
      display: inline-block;
      height: 4rem;
      line-height: 4rem;
      white-space: nowrap;
      padding-right: 100%;
      box-sizing: content-box;

      animation-iteration-count: infinite;
      animation-name: ticker;
      animation-duration: 30s;
			animation-timing-function: linear;

			.flex {
				display: flex;
				flex-direction: row;
			}
			
			&__description {
				color: white;
			}

      &__item {
        display: inline-block;
        width: fit-content;
        color: white;

        &-flex {
          display: flex;
					flex-direction: row;
					justify-content: space-around;
        }
      }
		}
  }

</style>