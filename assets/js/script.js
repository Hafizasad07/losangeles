// Carousel
jQuery(".carousel0").owlCarousel({
    autoplay: true,
    rewind: false,
    loop: true,
    /* use rewind if you don't want loop */
    margin: 0, 
    /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: false,
    dots: true,
    items: 1,
  });


  function asTabs(node) {
    var tabs = [];
    for (var i = 0; i < node.childNodes.length; i++) {
      var child = node.childNodes[i];
      if (child.nodeType == document.ELEMENT_NODE)
        tabs.push(child);
    }
    var tabList = document.createElement("div");
    tabs.forEach(function(tab, i) {
      var button = document.createElement("a");
      console.log(button);
      button.classList.add("data-tabname-a");
      button.textContent = tab.getAttribute("data-tabname");
      button.addEventListener("click", function() { selectTab(i); });
      tabList.appendChild(button);
    });
    node.insertBefore(tabList, node.firstChild);
    function selectTab(n) {
      console.log(n);
      $(".data-tabname-a").removeClass("active");
      $($(".data-tabname-a")[n]).addClass("active")
      tabs.forEach(function(tab, i) {
        if (i == n)
          tab.style.display = "block";
        else
          tab.style.display = "none";
      });
     
    }
    selectTab(0);
  }
  asTabs(document.querySelector("#tabwrapper"));
