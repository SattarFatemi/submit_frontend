if (screen.width <= 768) {
    $('.timer').circularCountDown({
        duration: {
            hours: 1,
            minutes: 0,
            seconds: 30,
        },
        size: 90,
        reverseLoading: true,
        reverseRotation: true,
        borderSize: 5,
        background: 'none',
        fontFamily: 'montserrat-black',
        fontColor: 'rgb(116, 116, 124)',
        circleColor: 'rgb(116, 116, 124)',
        fontSize: 16,
        delayToFadeIn: 1000,
        delayToFadeOut: 0,
    });
}
else {
    console.log(screen.width);
    $('.timer').circularCountDown({
        duration: {
            hours: 1,
            minutes: 0,
            seconds: 30,
        },
        size: 170,
        reverseLoading: true,
        reverseRotation: true,
        borderSize: 5,
        background: 'none',
        fontFamily: 'montserrat-black',
        fontColor: 'rgb(116, 116, 124)',
        circleColor: 'rgb(116, 116, 124)',
        fontSize: 30,
        delayToFadeIn: 1000,
        delayToFadeOut: 0,
    });
}