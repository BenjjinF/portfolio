<template lang="html">
    <div class="automated-workflows" @mouseover="animate">
        <div class="anchor">
            <div class="circle">
                <div class="point one" :class="{'active': pointOne}">

                </div>
                <div class="point two" :class="{'active': pointTwo}">

                </div>
                <div class="point three" :class="{'active': pointThree}">

                </div>
                <Gears ref="gears" :speed="speed"></Gears>
            </div>
        </div>
    </div>
</template>

<script>
import Gears from './_gears.vue'
export default {
    data() {
        return {
            'speed': 2.5,
            'pointOne': false,
            'pointTwo': false,
            'pointThree': false,
            'lock': false
        }
    },
    methods: {
        falsify() {
            this.pointOne = false
            this.pointTwo = false
            this.pointThree = false
        },
        animate() {
          if (!this.lock) {
            this.lock = true
            this.falsify()
            this.$refs.gears.animate()
            this.pointOne = true
            let secondPoint = setTimeout(() => {
                this.pointOne = false
                this.pointTwo = true
            }, this.speed / 3 * 1000)
            let thirdPoint = setTimeout(() => {
                this.pointTwo = false
                this.pointThree = true
            }, this.speed / 3 * 2 * 1000)
            let endAnimation = setTimeout(() => {
                this.pointThree = false
                this.lock = false
            }, this.speed * 1000)
          }
        }
    },
    components: {
        Gears
    }
}
</script>

<style scoped lang="scss">


.automated-workflows {
    width: 100%;
    padding-top: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .anchor {
        position: absolute;
        top: 2.5%;
        // left: 6.5%;
        width: 100%;
        pointer-events: none;
        box-sizing: border-box;
        .circle {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: .5rem solid $primary-dark;
            box-sizing: border-box;

            .point {
                position: absolute;
                border-radius: 50%;
                height: 15%;
                width: 15%;
                border: .5rem solid $primary-dark;
                background: $primary-dark;
                transition-duration: $transition-duration / 2;

                &.active {
                    background: $primary-light;
                }
                &.one {
                    top: -5.5%;
                    left: 43%;
                }
                &.two {
                    top: 64%;
                    left: 85%;
                }
                &.three {
                    top: 64%;
                    left: -0.5%;
                }
            }
        }
    }
}

</style>
