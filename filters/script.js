var sourceImage = 'atx.jpg';

function inkwell() {
    var photo = new Image();
    var canvas = document.getElementById("inkwell");
    var context = canvas.getContext("2d");
    
    function render() {
        context.filter = "sepia(.3)contrast(1.1)brightness(1.1)grayscale(1)";
        context.drawImage(photo, 0, 0, canvas.width, canvas.height);
    }
    photo.onload = render;
    photo.src = sourceImage;
}

function walden() {
    var photo = new Image();
    var canvas = document.getElementById("walden");
    var context = canvas.getContext("2d");
    
    function render() {
        context.globalCompositeOperation = "screen";
        context.fillStyle = 'rgba(0,68,204,1)';
        context.globalAlpha = 0.3;
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.globalAlpha = 1;
        context.filter = "brightness(1.1) hue-rotate(-10deg) sepia(.3) saturate(1.6)";
        context.drawImage(photo, 0, 0, canvas.width, canvas.height);

    }

    photo.onload = render;
    photo.src = sourceImage;
}

function ninteen() {
    var photo = new Image();
    var canvas = document.getElementById("ninteen");
    var context = canvas.getContext("2d");
    
    context.globalCompositeOperation = "screen";

    function render() {
        context.fillStyle = "rgba(243,106,188,.4)";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.filter = "contrast(1.1) brightness(1.1) saturate(1.3)";
        context.drawImage(photo, 0, 0, canvas.width, canvas.height);
    }

    photo.onload = render;
    photo.src = sourceImage;
}

function aden() {
    var photo = new Image();
    var canvas = document.getElementById("aden");
    var context = canvas.getContext("2d");
    
    context.globalCompositeOperation = "darken";

    function render() {
        gradient = context.createLinearGradient(0, canvas.height / 2, canvas.width, canvas.height / 2);

        gradient.addColorStop(0.000, 'rgba(66, 10, 14, .2)');
        gradient.addColorStop(1.000, 'transparent');

        context.fillStyle = gradient;
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.filter = "hue-rotate(-20deg) contrast(.9) saturate(0.85) brightness(1.2)";
        context.drawImage(photo, 0, 0, canvas.width, canvas.height);
    }
    photo.onload = render;
    photo.src = sourceImage;
}

function brannan() {
    var photo = new Image();
    var canvas = document.getElementById("brannan");
    var context = canvas.getContext("2d");
    
    context.globalCompositeOperation = "lighten";

    function render() {
        context.filter = "sepia(.5) contrast(1.3)brightness(1.1)";
        context.fillStyle = 'rgba(161,44,199,.31)';

        context.fillRect(0, 0, canvas.width, canvas.height);

        context.drawImage(photo, 0, 0, canvas.width, canvas.height);

    }
    photo.onload = render;
    photo.src = sourceImage;
}

function gingham() {
    var photo = new Image();
    var canvas = document.getElementById("gingham");
    var context = canvas.getContext("2d");
    
    context.globalCompositeOperation = "soft-light";

    function render() {
        context.drawImage(photo, 0, 0, canvas.width, canvas.height);
        context.fillStyle = 'lavender';
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.filter = "hue-rotate(-10deg)brightness(1.05)";
    }

    photo.onload = render;
    photo.src = sourceImage;
}

function brook() {
    var photo = new Image();
    var canvas = document.getElementById("brook");
    var context = canvas.getContext("2d");
    
    context.globalCompositeOperation = "overlay";

    function render() {
        context.drawImage(photo, 0, 0, canvas.width, canvas.height);
        var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, 0.766 * canvas.height);
        gradient.addColorStop(0, "rgba(168, 223, 193, 0.2)");
        gradient.addColorStop(1, "#c4b7c8");

        context.filter = "contrast(.9) brightness(1.1)";
        context.fillStyle = gradient;
        context.fillRect(0, 0, canvas.width, canvas.height);

    }

    photo.onload = render;
    photo.src = sourceImage;
}

function clarandon() {
    var photo = new Image();
    var canvas = document.getElementById("clarandon");
    var context = canvas.getContext("2d");
    
    context.globalCompositeOperation = "overlay";

    function render() {
        context.fillStyle = 'rgba(127, 187, 227, 0.2)';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.filter = "contrast(1.2) saturate(1.35)";
        context.drawImage(photo, 0, 0, canvas.width, canvas.height);
    }
    photo.onload = render;
    photo.src = sourceImage;
}

function willow() {
    var photo = new Image();
    var canvas = document.getElementById("willow");
    var context = canvas.getContext("2d");
    context.globalCompositeOperation = "color";
    
    function render() {

        context.filter = "grayscale(.5) contrast(.95) brightness(.9)";
        context.drawImage(photo, 0, 0, canvas.width, canvas.height);
        context.fillStyle = '#d8cdcb';
        context.fillRect(0, 0, canvas.width, canvas.height);
    }
    photo.onload = render;
    photo.src = sourceImage;
}

function valencia() {
    var photo = new Image();
    var canvas = document.getElementById("valencia");
    var context = canvas.getContext("2d");
    
    context.globalCompositeOperation = "exclusion";

    function render() {
        context.filter = "contrast(1.08) brightness(1.08) sepia(0.08)";
        context.drawImage(photo, 0, 0, canvas.width, canvas.height);
        context.globalAlpha = 0.5;
        context.fillStyle = '#3a0339';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.globalAlpha = 1;
    }
    photo.onload = render;
    photo.src = sourceImage;
}

function hudson() {
    var photo = new Image();
    var canvas = document.getElementById("hudson");
    var context = canvas.getContext("2d");
    
    context.globalCompositeOperation = "multiply";

    function render() {

        context.drawImage(photo, 0, 0, canvas.width, canvas.height);
        context.globalAlpha = 0.5;
        var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 120, canvas.width / 2, canvas.width / 2, 1.1 * canvas.height);
        gradient.addColorStop(0, 'rgba(166, 177, 255, 1.000)');
        gradient.addColorStop(.5, 'rgba(52, 33, 52, 1.000)');

        context.fillStyle = gradient;
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.globalAlpha = 1;
        context.filter = "brightness(1.2) contrast(0.9) saturate(1.1)";

    }
    photo.onload = render;
    photo.src = sourceImage;
}

function xpro() {
    var photo = new Image();
    var canvas = document.getElementById("xpro");
    var context = canvas.getContext("2d");
    
    context.globalCompositeOperation = "color-burn";

    function render() {

        context.drawImage(photo, 0, 0, canvas.width, canvas.height);

        var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, 1.1 * canvas.height);
        gradient.addColorStop(0.4, '#e6e7e0');
        gradient.addColorStop(1, 'rgba(43, 42, 161, .6)');
        context.fillStyle = gradient;
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.filter = "sapia(.3)";

    }
    photo.onload = render;
    photo.src = sourceImage;
}

function toaster() {
    var photo = new Image();
    var canvas = document.getElementById("toaster");
    var context = canvas.getContext("2d");
    
    context.globalCompositeOperation = "screen";

    function render() {
        context.drawImage(photo, 0, 0, canvas.width, canvas.height);
        context.filter = "contrast(1.5) brightness(0.9)";
        var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, .66 * canvas.height);
        gradient.addColorStop(0, '#804e0f');
        gradient.addColorStop(1, '#3b003b');

        context.fillStyle = gradient;
        context.fillRect(0, 0, canvas.width, canvas.height);

    }
    photo.onload = render;
    photo.src = sourceImage;
}

function earlybird() {
    var photo = new Image();
    var canvas = document.getElementById("earlybird");
    var context = canvas.getContext("2d");
    
    context.globalCompositeOperation = "overlay";

    function render() {
        context.drawImage(photo, 0, 0, canvas.width, canvas.width);
        var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, .833 * canvas.height);
        gradient.addColorStop(0.2, '#d0ba8e');
        gradient.addColorStop(0.85, '#360309');
        gradient.addColorStop(1, '#1d0210');
        context.fillStyle = gradient;
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.filter = "contrast(.9) brightness(0.2)";

    }
    photo.onload = render;
    photo.src = sourceImage;
}

function maven() {
    var photo = new Image();
    var canvas = document.getElementById("maven");
    var context = canvas.getContext("2d");
    
    context.globalCompositeOperation = "hue";

    function render() {
        context.drawImage(photo, 0, 0, canvas.width, canvas.height);
        context.fillStyle = 'rgba(3, 230, 26, 0.2)';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.filter = "sepia(0.25) brightness(0.95) contrast(0.95) saturate(1.5)";
    }
    photo.onload = render;
    photo.src = sourceImage;
}

function perpetua() {
    var photo = new Image();
    var canvas = document.getElementById("perpetua");
    var context = canvas.getContext("2d");
    
    context.globalCompositeOperation = "soft-light";

    function render() {
        context.drawImage(photo, 0, 0, canvas.width, canvas.height);
        context.globalAlpha = .5;
        var gradient = context.createLinearGradient(canvas.width / 2, 0.000, canvas.width / 2, canvas.height);;
        gradient.addColorStop(0, '#005b9a');
        gradient.addColorStop(1, '#e6c13d');
        context.fillStyle = gradient;
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.globalAlpha = 1;
    }
    photo.onload = render;
    photo.src = sourceImage;
}

function reyes() {
    var photo = new Image();
    var canvas = document.getElementById("reyes");
    var context = canvas.getContext("2d");
    
    context.globalCompositeOperation = "soft-light";

    function render() {
        context.filter = "sepia(0.22) brightness(1.1) contrast(0.85) saturate(0.75)";
        context.drawImage(photo, 0, 0, canvas.width, canvas.height);
        context.globalAlpha = .5;
        context.fillStyle = '#efcdad';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.globalAlpha = 1;

    }
    photo.onload = render;
    photo.src = sourceImage;
}

function stinson() {
    var photo = new Image();
    var canvas = document.getElementById("stinson");
    var context = canvas.getContext("2d");
    
    context.globalCompositeOperation = "soft-light";

    function render() {
        context.filter = "contrast(0.75) saturate(0.85) brightness(1.15)";
        context.drawImage(photo, 0, 0, canvas.width, canvas.height);
        context.fillStyle = 'rgba(240, 149, 128, 0.2)';
        context.fillRect(0, 0, canvas.width, canvas.height);

    }
    photo.onload = render;
    photo.src = sourceImage;
}

function process(source) {
    sourceImage = source;
    inkwell();
    walden();
    ninteen();
    aden();
    brannan();
    gingham();
    brook();
    clarandon();
    willow();
    valencia();
    hudson();
    xpro();
    toaster();
    earlybird();
    maven();
    perpetua();
    reyes();
    stinson();
}

process();


