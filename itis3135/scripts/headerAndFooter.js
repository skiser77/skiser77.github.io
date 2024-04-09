function appendHeader(){
  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  h1.id = 'h1';
  const nav1 = document.createElement('nav');
  nav1.id = 'nav1';
  const nav2 = document.createElement('nav');
  nav2.id = 'nav2';
  const button = document.createElement('button');


  header.appendChild(h1);
  header.appendChild(nav1);
  header.appendChild(nav2);

  

  $(document).ready(function() {
    $.getJSON("components/header.json", function(data) {
      
      
      h1.innerText = "Sean Kiser's Sensational Kangaroo || ITIS 3135";
    

      $.each(data.nav1, function(index, link) {
        $("#nav1").append('<a href="' + link.href + '">' + link.text + '</a>');
        if (index < data.nav1.length - 1) {
          $("#nav1").append(" || ");
        }
      });
      
      $.each(data.nav2, function(index, link) {
        $("#nav2").append('<a href="' + link.href + '">' + link.text + '</a>');
        if (index < data.nav2.length - 1) {
          $("#nav2").append(" || ");
        }
      });
    });
  });

  const main = document.querySelector('main');

  document.body.insertBefore(header, main);
}

function appendFooter(){
  const footer = document.createElement('footer');
  const nav1 = document.createElement('nav');
  nav1.id = 'navfooter';
  footer.appendChild(nav1);

  $(document).ready(function() {
    $.getJSON("components/footer.json", function(data) {
      
        $.each(data.nav1, function(index, link) {
        $("#navfooter").append('<a href="' + link.href + '">' + link.text + '</a>');
        if (index < data.nav1.length - 1) {
          $("#navfooter").append(" || ");
        }
      });

      const paragraph = $("<p>");
      paragraph.append(data.text + " ");
      paragraph.append('<a href="' + data.href + '">' + data.companyText + '</a>' + " ");
      paragraph.append(data.copyright + ", ")
      $.each(data.links, function(index, link) {
        paragraph.append('<a href="' + link.href + '">' + link.text + '</a>');
        if (index < data.links.length - 1) {
          paragraph.append(", ");
        }
      });
      $("footer").append(paragraph);

      
      const button = $("<button>");
      button.append(data.buttontext);
      $.each(data.buttonAttributes, function(){
        button.attr(this.attribute, this.input);
      })

      $("footer").append(button);

      const validationParagraph = $("<p>");
      $.each(data.validationlinks, function(){
        validationParagraph.append('<a href="' + this.href + '"><img style="' + this.style + '" src="' + this.imgSrc + '" alt="' + this.altText + '"></a>')
      });
      $("footer").append(validationParagraph);

      const validationscript = $("<script>");
      $.each(data.validationscripts, function(){
        validationscript.append('document.getElementById("' + this.id + '").setAttribute("' + this.attribute + '","' + this.value + '" + location.href);');
      })
      

      $("footer").append(validationscript);
    });




  });

  

  const main = document.querySelector('main');

  main.insertAdjacentElement('afterend',  footer);


}

document.addEventListener('DOMContentLoaded', function() {
  appendHeader();
  appendFooter();
});

