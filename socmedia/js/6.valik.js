$( document ).ready(function() {

  // Главная макбук
  $(".mission-item").on("click", function() {
    var self = this;
    if($(self).hasClass("mission-active")) {
      $(self).removeClass("mission-active");
    }
    else {
      $(".mission-item").removeClass("mission-active");
      $(self).addClass("mission-active");
    }
  });

  // Гумбургер
  $(".hamburger").on("click", function() {
    $(".elements").addClass("elements-show");
  });
  $(".elements-close").on("click", function() {
    $(".elements").removeClass("elements-show");
  });

  // Елементы таблицы
  $(".elements-td").on("click", function() {
    self = this;
    if($(self).parent().hasClass("element-td__active")) {
      return;
    }
    else {
      $(".elements-td").parent().removeClass("element-td__active");
      $(self).parent().addClass("element-td__active");
    }
  });

  // Больше клиентов
  $(".client-item__hide").parent().addClass("dis-none");
  $(".clients-btn .btn").on("click", function() {
    $(".client-item__hide").parent().removeClass("dis-none");
    $(".client-item").removeClass("client-item__hide");
    $(this).hide();
    $(".clients").addClass("clients-active");
  });

  // О нас, слайдер описания команды
  $(".team-slider__info").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    speed: 300,
    fade: true,
    arrows: false,
    draggable: false,
    swipe: false
  });
  // О нас, слайдер с фотками команды
  var teamSlider = new Swiper(".swiper-container", {
			direction: "horizontal",
			centeredSlides: true,
			slidesPerView: 4,
			effect: "coverflow",
			spaceBetween: "0%", // 15,
			slideToClickedSlide: true,
			watchSlidesProgress: true,
			autoHeight: true,
			loop: true,
			coverflowEffect: {
				rotate: 0,
				slideShadows: false,
				depth: 100,
				modifier: 1,
				dumboEdgeCase: true, // die nicht aktiven in einer Ebene (hardcoded in das Plugin selbst – Bei Plugin Update geht die Einstellung also verloren
			},
			navigation: {
				prevEl: '.prev',
				nextEl: '.next',
			},
      breakpoints: {
        1500: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 1,
        }
      }
		});
    $(".swiper-control__prev").on("click", function() {
      teamSlider.slidePrev();
      $(".team-slider__info").slick('slickPrev');
    });
    $(".swiper-control__next").on("click", function() {
      teamSlider.slideNext();
      $(".team-slider__info").slick('slickNext');
    });
    teamSlider.on('slideChange', function () {
      var goSlide = teamSlider.realIndex;
      $(".team-slider__info").slick('slickGoTo', goSlide);
    });

    // О нас, пункты
    var wow = new WOW({
      mobile: false
    });
    wow.init();


    // Новости фильтры
    $(".news-filter ul li").on("click", function() {
      $(".news-filter ul li").removeClass("active");
      $(this).addClass("active");
    });

    // Моб елементы (услуги)

    $(".mob-element__first").on("click", function() {
      if($(this).hasClass("mob-element__active")) {
        $(".mob-element__text-one").slideUp();
        $(".mob-element__text-two").slideUp();

        $(".mob-element__first").addClass("mob-element__white");
        $(".mob-element__second").addClass("mob-element__white");

        $(".mob-element__first").removeClass("mob-element__active");
        $(".mob-element__second").removeClass("mob-element__active");
      } else {
        $(".mob-element__first").addClass("mob-element__white");
        $(".mob-element__second").addClass("mob-element__white");
        $(".mob-element__first").removeClass("mob-element__active");
        $(".mob-element__second").removeClass("mob-element__active");

        $(".mob-element__text-one").slideUp();
        $(".mob-element__text-two").slideUp();

        $(this).addClass("mob-element__active");
        $(this).removeClass("mob-element__white");
        $(this).parent().find(".mob-element__text-one").slideDown();
      }
    });

    $(".mob-element__second").on("click", function() {
      if($(this).hasClass("mob-element__active")) {
        $(".mob-element__text-one").slideUp();
        $(".mob-element__text-two").slideUp();

        $(".mob-element__first").addClass("mob-element__white");
        $(".mob-element__second").addClass("mob-element__white");

        $(".mob-element__first").removeClass("mob-element__active");
        $(".mob-element__second").removeClass("mob-element__active");
      } else {
        $(".mob-element__first").addClass("mob-element__white");
        $(".mob-element__second").addClass("mob-element__white");
        $(".mob-element__first").removeClass("mob-element__active");
        $(".mob-element__second").removeClass("mob-element__active");

        $(".mob-element__text-one").slideUp();
        $(".mob-element__text-two").slideUp();

        $(this).addClass("mob-element__active");
        $(this).removeClass("mob-element__white");
        $(this).parent().find(".mob-element__text-two").slideDown();
      }
    });

    // lang
    $(".lang").on("click", function() {
      $(".lang-choose").toggleClass("lang-active");
    });

    // contact
    $(".move-to-contact").on("click", function(event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    });
    $(".move-to-cases").on("click", function(event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: $(".cases").offset().top }, 1000);
    });

    // top menu services
    $(".elements-trigger").on("click", function(event) {
      event.preventDefault();
      $(".hamburger").trigger("click");
    });
















// var camera, scene, renderer;
//
// var cubes_count = 64;
// var cubes_repeat = 4;
// var cubes_size = 50;
// var cubes_noise = 100;
// var cubes = [];
//
// //var cubes_color = [0xff5262,0xffc10f,0xffee00,0x00b3a9,0x4fe8e2,0x00bfee,0x00afdf,0x007498];
// var cubes_color = [0xe87d7d,0xe88a7d,0xe8977d,0xe8a47d,0xe8b07d,0xe8bd7d,0xe8ca7d,0xe8d77d,
// 0xe8e47d,0xdfe87d,0xd3e87d,0xc6e87d,0xb9e87d,0xace87d,0x9fe87d,0x92e87d,
// 0x86e87d,0x7de881,0x7de88e,0x7de89b,0x7de8a8,0x7de8b5,0x7de8c1,0x7de8ce,
// 0x7de8db,0x7de8e8,0x7ddbe8,0x7dcee8,0x7dc1e8,0x7db5e8,0x7da8e8,0x7d9be8,
// 0x7d8ee8,0x7d81e8,0x867de8,0x927de8,0x9f7de8,0xac7de8,0xb97de8,0xc67de8,
// 0xd37de8,0xdf7de8,0xe87de4,0xe87dd7,0xe87dca,0xe87dbd,0xe87db0,0xe87da4,
// 0xe87d97,0xe87d8a,0xe87d7d];
// var color_count = 0;
//
// init();
// animate();
//
// function init()
// {
// 	camera = new THREE.PerspectiveCamera(115, window.innerWidth / window.innerHeight, 1, 10000);
// 	camera.position.set(0, 0, 500);
// 	camera.rotation.set(0, 0, 0);
//
// 	scene = new THREE.Scene();
// 	scene.fog = new THREE.Fog(0xffffff, 500, 1300);
// 	scene.fog.color.setHSL(0.6, 0, 1);
//
// 	var light = new THREE.DirectionalLight( 0xffffff );
// 	light.position.set( 0, 0, 1 );
// 	scene.add( light );

  // var texture = THREE.ImageUtils.loadTexture('/wp-content/uploads/2018/09/canvas-bg01.png');
  // var backgroundMesh = new THREE.Mesh(
  //     new THREE.PlaneGeometry(2, 2, 0),
  //     new THREE.MeshBasicMaterial({
  //         map: texture
  //     }));
  //
  // backgroundMesh.material.depthTest = false;
  // backgroundMesh.material.depthWrite = false;
  //
  // var backgroundScene = new THREE.Scene();
  // var backgroundCamera = new THREE.Camera();
  // backgroundScene.add(backgroundCamera);
  // backgroundScene.add(backgroundMesh);

	// initScene();
  //
	// renderer = new THREE.WebGLRenderer({ alpha: true });
	// renderer.setClearColor( 0x000000, 0);
	// renderer.setSize(window.innerWidth * .9, window.innerHeight * .9);


  //$(".header-content").append(renderer.domElement);

	// Events
// 	window.addEventListener('resize', onWindowResize, false);
// }
//
// function onWindowResize()
// {
// 	camera.aspect = window.innerWidth / window.innerHeight;
// 	camera.updateProjectionMatrix();
// 	renderer.setSize(window.innerWidth * .9, window.innerHeight * .9);
// }
//
// function initScene()
// {
// 	for (var r = 0; r < cubes_repeat; r++)
// 		for (var i = 0; i < cubes_count; i++)
// 		{
// 			var geometry = new THREE.BoxGeometry(cubes_size, cubes_size, cubes_size);
// 			var material = new THREE.MeshLambertMaterial({ color: '#ff5262' });
// 			var mesh = new THREE.Mesh(geometry, material);
// 			mesh.rotation.x = Math.random() * 360;
// 			mesh.rotation.y = Math.random() * 360;
// 			scene.add(mesh);
//
// 			var angle = (360 / cubes_count * i);
// 			var radius = 500 + Math.random() * cubes_noise - cubes_noise / 2;
//
// 			cubes.push({ mesh: mesh, angle: angle, radius: radius, speed: Math.random() * 1 + .2 });
// 		}
// }
//
// var count_to_anim_color = 0;
// var color_cube_animation = 0x000000;
// function animate()
// {
// 	requestAnimationFrame(animate);
//
// 	var size = cubes.length;
// 	for (var i = 0; i < size; i++)
// 	{
// 		cubes[i].angle += cubes[i].speed;
//
// 		cubes[i].mesh.position.x = cubes[i].radius * Math.cos(cubes[i].angle * Math.PI / 180);
// 		cubes[i].mesh.position.y = cubes[i].radius * Math.sin(cubes[i].angle * Math.PI / 180);
// 		cubes[i].mesh.rotation.x += 0.01;
// 		cubes[i].mesh.rotation.y += 0.01;
//
//     count_to_anim_color++;
// 	}
//
//   if (count_to_anim_color > 1600) {
//     for(var i = 0; i < size; i++) {
//       cubes[i].mesh.material.color.setHex(cubes_color[color_count]);
//     }
//     count_to_anim_color = 0;
//     color_count++;
//     if(color_count > 49) {
//       color_count = 0;
//     }
//   }
//
// 	renderer.render(scene, camera);
// }


});

$(document).mouseup(function(e) {
    var container2 = $(".lang");
    var container3 = $(".lang-choose");
    if (!container2.is(e.target) && container2.has(e.target).length === 0 && !container3.is(e.target) && container3.has(e.target).length === 0)
    {
      $(".lang-choose").removeClass("lang-active");
    }

});
