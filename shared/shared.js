let modalBody = document.getElementsByClassName("modal-body")[0];

function htmlToElement(html) {
    var template = document.createElement("template");
    html = html.trim(); // Trim za da izbrishime whitespace
    template.innerHTML = html;
    return template.content.firstChild; // posho go stavam kako innerHTML cel string go vrakjam prviot child sho e kartata bez <template> tagovite.
  }
  
  function appendFooter(innerText) {
    let footer = htmlToElement(
      `
       <button type="button" id="submit" class
       ="btn btn-primary">${innerText}</button>
    `
    );
    modalFooter.append(footer);
  }