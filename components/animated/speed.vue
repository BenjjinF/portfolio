<template lang="html">
  <div class="speed">
    <svg width="380" height="380" viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="380" height="380">
      <circle cx="190" cy="190" r="190" fill="white"/>
      </mask>
      <g mask="url(#mask0)">
      <path class="hour" :style="{'--initial-hour': hourRotate + 'deg'}" d="M198 189.691C198 193.727 194.642 197 190.5 197C186.358 197 183 193.727 183 189.691C183 185.654 190.5 97 190.5 97C190.5 97 198 185.654 198 189.691Z" fill="#1C3144"/>
      <path class="minute" :style="{'--initial-minute': minuteRotate + 'deg'}" d="M193.599 197C187.745 197 183 193.642 183 189.5C183 185.358 187.745 182 193.599 182C199.452 182 328 189.5 328 189.5C328 189.5 199.452 197 193.599 197Z" fill="#1C3144"/>
      <circle cx="191" cy="10" r="25" stroke="#9FA2B2" stroke-width="10"/>
      <circle cx="191" cy="10" r="15" fill="#1C3144"/>
      <circle cx="191" cy="370" r="25" stroke="#9FA2B2" stroke-width="10"/>
      <circle cx="191" cy="370" r="15" fill="#1C3144"/>
      <circle cx="370" cy="190" r="25" stroke="#9FA2B2" stroke-width="10"/>
      <circle cx="370" cy="190" r="15" fill="#1C3144"/>
      <circle cx="10" cy="190" r="25" stroke="#9FA2B2" stroke-width="10"/>
      <circle cx="10" cy="190" r="15" fill="#1C3144"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M211.932 31.4907C216.935 26.6165 220.243 20.0098 220.885 12.6396C240.568 16.0432 259.156 22.6434 276.095 31.8864L266.09 49.2158C249.573 40.2703 231.305 34.1465 211.932 31.4907ZM161.088 12.3097C161.65 19.696 164.887 26.3346 169.833 31.2588C150.045 33.7476 131.381 39.8501 114.525 48.8847L104.518 31.5531C121.858 22.1786 140.912 15.5674 161.088 12.3097ZM110.155 51.3157C87.1892 64.5663 67.8228 83.3576 53.8822 105.863L36.5518 95.8575C52.2535 70.3189 74.1523 48.9989 100.153 33.9923L110.155 51.3157ZM343.61 96.1212C328.018 70.6638 306.276 49.3816 280.451 34.3423L270.449 51.6658C293.24 64.9484 312.45 83.7019 326.281 106.126L343.61 96.1212ZM348.262 275.823C357.581 258.675 364.194 239.842 367.528 219.9C360.15 219.298 353.527 216.026 348.627 211.053C346.052 230.646 339.932 249.123 330.931 265.818L348.262 275.823ZM346.162 100.421C356.59 118.562 363.949 138.691 367.528 160.1C360.15 160.702 353.527 163.974 348.627 168.947C345.857 147.871 338.985 128.087 328.839 110.423L346.162 100.421ZM345.813 280.183L328.49 270.181C315.315 292.888 296.716 312.056 274.467 325.913L284.473 343.244C309.755 327.625 330.882 305.924 345.813 280.183ZM31.3727 211.053C33.9619 230.752 40.1351 249.324 49.2158 266.09L31.8864 276.095C22.4893 258.874 15.8237 239.948 12.4719 219.9C19.8502 219.298 26.473 216.026 31.3727 211.053ZM31.3727 168.947C34.1569 147.765 41.0847 127.887 51.3157 110.155L33.9922 100.153C23.4822 118.363 16.0689 138.586 12.4719 160.1C19.8502 160.702 26.473 163.974 31.3727 168.947ZM106.126 326.281C83.7019 312.45 64.9484 293.24 51.6658 270.449L34.3423 280.451C49.3816 306.276 70.6638 328.018 96.1213 343.61L106.126 326.281ZM270.181 328.49L280.183 345.813C262.164 356.265 242.165 363.681 220.885 367.36C220.243 359.99 216.935 353.383 211.932 348.509C232.919 345.632 252.61 338.685 270.181 328.49ZM169.833 348.741C148.425 346.049 128.334 339.127 110.423 328.839L100.421 346.162C118.84 356.751 139.31 364.174 161.088 367.69C161.65 360.304 164.887 353.665 169.833 348.741Z" fill="#C6DBF0"/>
      <circle cx="190" cy="190" r="185" stroke="#1C3144" stroke-width="10"/>
      </g>
    </svg>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        now: new Date
      }
    },
    computed: {
      minutes() {
        return this.now.getMinutes() 
      },
      minuteRotate() {
        return  this.minutes/60*360 - 90
      },
      minutesAdjustedRotate() {
        return 8640 + this.minuteRotate + 'deg'
      },
      hours() {
        return this.now.getHours() 
      },
      hourRotate() {
        let base = this.hours > 11 ? (this.hours - 12)/12*360 : this.hours/12*360
        let minuteAdjustment = this.minutes/60*360/30
        return base + minuteAdjustment
      }
    },
    created() {
      let now = new Date
      let startIn = 60 - now.getSeconds()
      setTimeout(() => {
        this.now = new Date
        setInterval(() => {
          this.now = new Date
        }, 1000*60)
      }, startIn * 1000)
    }
  }
</script>
<style lang="scss">
@keyframes speedyMinutes {
  80% {
    fill: color(red);
  }
  100% {
    fill: color(grey);
    transform: rotate(calc(4320deg + var(--initial-minute)));
  }
}
@keyframes speedyHours {
  80% {
    fill: color(red);
  }
  100% {
    fill: color(grey);
    transform: rotate(calc(360deg + var(--initial-hour)));
  }
}
.animation {
  .speed {
    position: relative;
    height: 100%;
    svg {
      position: absolute;
      top: 0%;
      width: 100%;
      height: auto;
      * {
        transform-origin: 50% 50%;
      }
      .minute, .hour {
        transition-duration: 1s;
      }
      .minute {
        transform: rotate(var(--initial-minute))
      }
      .hour {
        transform: rotate(var(--initial-hour))
      }
    }
  }
  &.active {
    .minute {
      transform-origin: 50% 50%;
      animation-name: speedyMinutes;
      animation-timing-function: ease-in-out;
    }
    .hour {
      transform-origin: 50% 50%;
      animation-name: speedyHours;
      animation-timing-function: ease-in-out;
    }
  }
}
</style>