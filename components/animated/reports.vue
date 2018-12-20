<template lang="html">
	<div class="reports" @mouseover="animate" @touchstart="animate">
		<div class="anchor">
			<div class="chart" :class="{'bounce': bounce}">
				<div class="triangle one"></div>
				<div class="triangle two"></div>
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

$spuedo-margin: .6em;

.reports {
	width: 100%;
	padding-top: 100%;
	position: relative;
	.anchor {
		position: absolute;
		top: 0%;
		width: 100%;
		height: 100%;
		pointer-events: none;
		overflow: hidden;
		.chart {
			width: 100%;
			height: 100%;
			border-left: $spuedo-margin solid color(primary, dark);
			border-bottom: $spuedo-margin solid color(primary, dark);
			.triangle {
				height: 0;
				width: 100%;
				position: absolute;
				left: $spuedo-margin * 2;
				bottom: $spuedo-margin * 2;
				overflow: hidden;
				&:after {
					content: "";
					display: block;
					width: 0;
					height: 0;
				}
			}
			.triangle.one {
		    padding-left: 40%;
				padding-bottom: 55%;
				transition: 3s;
				&:after {
			    margin-left:-550px;
			    border-left: 500px solid transparent;
			    border-right: 600px solid transparent;
			    border-bottom: 500px solid color(grey);
				}
			}
			.triangle.two {
		    padding-left: 50%;
				padding-bottom: 75%;
				transition: 2s;
				&:after {
					margin-left:-450px;
					border-left: 500px solid transparent;
					border-right: 500px solid transparent;
					border-bottom: 500px solid color(primary, light);
				}
			}

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

			&.bounce {
				.triangle.one {
					animation: bounceOne 3s;
				}
				.triangle.two {
					animation: bounceTwo 3s;
				}
			}
		}
	}
}
</style>
