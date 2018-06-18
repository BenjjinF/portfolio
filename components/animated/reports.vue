<template lang="html">
	<div class="reports" @mouseover="animate">
		<div class="anchor">
			<div class="chart active" :class="{'bounce': bounce}">
				<div class="triangle one">

				</div>
				<div class="triangle two">

				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			'bounce': false,
			'speed': 2.5,
			'lock': false
		}
	},
	methods: {
	  animate() {
			if (!this.lock) {
				this.lock = true
				this.bounce = true
				let animation = setTimeout(() => {
					this.bounce = false
					this.lock = false
				}, this.speed * 1000)
			}
	  }
	}
}
</script>

<style scoped lang="scss">


.reports {
	width: 100%;
	padding-top: 100%;
	position: relative;
	.anchor {
		position: absolute;
		top: 0%;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: flex-end;
		pointer-events: none;
		overflow: hidden;

		.chart {
			width: 100%;
			height: 100%;
			border-left: .5rem solid $primary-dark;
			border-bottom: .5rem solid $primary-dark;
			padding: .5rem;
			display: flex;
			align-items: flex-end;
			box-sizing: border-box;

			@keyframes bounceOne {
				25% {
					padding-bottom: 50%;
				}
				50% {
					padding-bottom: 60%;
				}
				100% {
					padding-bottom: 55%;
				}
			}
			@keyframes bounceTwo {
				25% {
					padding-bottom: 80%;
				}
				50% {
					padding-bottom: 70%;
				}
				100% {
					padding-bottom: 75%;
				}
			}

			.triangle.one {
			    width: 100%;
			    height: 0;
			    padding-left: 40%;
			    padding-bottom: 0%;
			    overflow: hidden;
				position: absolute;
				transition: 3s;

			}
			.triangle.two {
			    width: 100%;
			    height: 0;
			    padding-left: 40%;
			    padding-bottom: 0%;
			    overflow: hidden;
				position: absolute;
				transition: 2s;
			}
			&.active {
				.triangle.one {
					padding-bottom: 55%;
				}
				.triangle.two {
					padding-bottom: 75%;
				}
			}
			&.bounce {
				.triangle.one {
					animation: bounceOne 3s;
				}
				.triangle.two {
					animation: bounceTwo 3s;
				}
			}
			.triangle.one {
				&:after {
			    content: "";
			    display: block;
			    width: 0;
			    height: 0;
			    margin-left:-550px;
			    border-left: 500px solid transparent;
			    border-right: 600px solid transparent;
			    border-bottom: 500px solid $grey;
				}
			}
			.triangle.two:after {
				content: "";
				display: block;
				width: 0;
				height: 0;
				margin-left:-450px;
				border-left: 500px solid transparent;
				border-right: 500px solid transparent;
				border-bottom: 500px solid $primary-light;
			}
		}
	}
}
</style>
