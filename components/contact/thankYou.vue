<template lang="html">
    <div id="thank-you" class="col-span">
        <h1>Thanks ~</h1>
        <p>I'll get back to you as soon as I can.</p>
    </div>
</template>

<style lang="scss">
    
    #thank-you {
        text-align: center;
        height: 329px;
        display: flex;
        align-items: center;
        justify-content: center;

        flex-direction: column;
        h1 {
            color: color(primary, dark);
            font-size: 3.5em;
            margin: 0;
        }
        p {
            color: color(grey);
        }
    }
</style>
