let rowRef = document.getElementById("rowRef");

fetch("https://saurav.tech/NewsAPI/everything/cnn.json")
  .then(
    function (res) {
      return res.json();
    },
    function (err) {
      console.log("Error in fetching Api!");
    }
  )
  .then(
    function (actualData) {
      for (let i = 0; i < actualData.articles.length; i++) {
        rowRef.innerHTML += `
        <div class="card p-3 mx-auto mb-3 newsbar" style="max-width:1000px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${actualData.articles[i].urlToImage}" width="100%" height="100%">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${actualData.articles[i].title}</h5>
                        <small class="text-muted">short by ${actualData.articles[i].author} / ${actualData.articles[i].publishedAt}</small>
                        <p class="card-text">${actualData.articles[i].description}</p>
                        <p class="card-text"><small class="text-muted">read more at <a href="${actualData.articles[i].url}" target="_blank">${actualData.articles[i].source.name}</a></small></p>
                    </div>
                </div>
            </div>
        </div>`;
      }
    },
    function (noData) {
      console.log("Error in iterate data!");
    }
  );

function fnAll() {
  rowRef.innerHTML = "";
  fetch("https://saurav.tech/NewsAPI/everything/cnn.json")
    .then(
      function (res) {
        return res.json();
      },
      function (err) {
        console.log("Error in fetching Api!");
      }
    )
    .then(
      function (actualData) {
        console.log(actualData);
        for (let i = 0; i < actualData.articles.length; i++) {
          rowRef.innerHTML += `
        <div class="card p-3 mx-auto mb-3 newsbar" style="max-width:1000px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${actualData.articles[i].urlToImage}" width="100%" height="100%">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${actualData.articles[i].title}</h5>
                        <small class="text-muted">short by ${actualData.articles[i].author} / ${actualData.articles[i].publishedAt}</small>
                        <p class="card-text">${actualData.articles[i].description}</p>
                        <p class="card-text"><small class="text-muted">read more at <a href="${actualData.articles[i].url}" target="_blank">${actualData.articles[i].source.name}</a></small></p>
                    </div>
                </div>
            </div>
        </div>`;
        }
      },
      function (noData) {
        console.log("Error in iterate data!");
      }
    );
}

function fnBusiness() {
  rowRef.innerHTML = "";
  fetch("https://saurav.tech/NewsAPI/top-headlines/category/business/in.json")
    .then(
      function (res) {
        return res.json();
      },
      function (err) {
        console.log("Error in fetching Api!");
      }
    )
    .then(
      function (actualData) {
        console.log(actualData);
        for (let i = 0; i < actualData.articles.length; i++) {
          rowRef.innerHTML += `
        <div class="card p-3 mx-auto mb-3 newsbar" style="max-width:1000px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${actualData.articles[i].urlToImage}" width="100%" height="100%">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${actualData.articles[i].title}</h5>
                        <small class="text-muted">short by ${actualData.articles[i].author} / ${actualData.articles[i].publishedAt}</small>
                        <p class="card-text">${actualData.articles[i].description}</p>
                        <p class="card-text"><small class="text-muted">read more at <a href="${actualData.articles[i].url}" target="_blank">${actualData.articles[i].source.name}</a></small></p>
                    </div>
                </div>
            </div>
        </div>`;
        }
      },
      function (noData) {
        console.log("Error in iterate data!");
      }
    );
}

function fnEntertainment() {
  rowRef.innerHTML = "";
  fetch(
    "https://saurav.tech/NewsAPI/top-headlines/category/entertainment/in.json"
  )
    .then(
      function (res) {
        return res.json();
      },
      function (err) {
        console.log("Error in fetching Api!");
      }
    )
    .then(
      function (actualData) {
        console.log(actualData);
        for (let i = 0; i < actualData.articles.length; i++) {
          rowRef.innerHTML += `
        <div class="card p-3 mx-auto mb-3 newsbar" style="max-width:1000px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${actualData.articles[i].urlToImage}" width="100%" height="100%">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${actualData.articles[i].title}</h5>
                        <small class="text-muted">short by ${actualData.articles[i].author} / ${actualData.articles[i].publishedAt}</small>
                        <p class="card-text">${actualData.articles[i].description}</p>
                        <p class="card-text"><small class="text-muted">read more at <a href="${actualData.articles[i].url}" target="_blank">${actualData.articles[i].source.name}</a></small></p>
                    </div>
                </div>
            </div>
        </div>`;
        }
      },
      function (noData) {
        console.log("Error in iterate data!");
      }
    );
}

function fnGeneral() {
  rowRef.innerHTML = "";
  fetch("https://saurav.tech/NewsAPI/top-headlines/category/general/in.json")
    .then(
      function (res) {
        return res.json();
      },
      function (err) {
        console.log("Error in fetching Api!");
      }
    )
    .then(
      function (actualData) {
        console.log(actualData);
        for (let i = 0; i < actualData.articles.length; i++) {
          rowRef.innerHTML += `
        <div class="card p-3 mx-auto mb-3 newsbar" style="max-width:1000px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${actualData.articles[i].urlToImage}" width="100%" height="100%">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${actualData.articles[i].title}</h5>
                        <small class="text-muted">short by ${actualData.articles[i].author} / ${actualData.articles[i].publishedAt}</small>
                        <p class="card-text">${actualData.articles[i].description}</p>
                        <p class="card-text"><small class="text-muted">read more at <a href="${actualData.articles[i].url}" target="_blank">${actualData.articles[i].source.name}</a></small></p>
                    </div>
                </div>
            </div>
        </div>`;
        }
      },
      function (noData) {
        console.log("Error in iterate data!");
      }
    );
}

function fnHealth() {
  rowRef.innerHTML = "";
  fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json")
    .then(
      function (res) {
        return res.json();
      },
      function (err) {
        console.log("Error in fetching Api!");
      }
    )
    .then(
      function (actualData) {
        console.log(actualData);
        for (let i = 0; i < actualData.articles.length; i++) {
          rowRef.innerHTML += `
        <div class="card p-3 mx-auto mb-3 newsbar" style="max-width:1000px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${actualData.articles[i].urlToImage}" width="100%" height="100%">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${actualData.articles[i].title}</h5>
                        <small class="text-muted">short by ${actualData.articles[i].author} / ${actualData.articles[i].publishedAt}</small>
                        <p class="card-text">${actualData.articles[i].description}</p>
                        <p class="card-text"><small class="text-muted">read more at <a href="${actualData.articles[i].url}" target="_blank">${actualData.articles[i].source.name}</a></small></p>
                    </div>
                </div>
            </div>
        </div>`;
        }
      },
      function (noData) {
        console.log("Error in iterate data!");
      }
    );
}

function fnScience() {
  rowRef.innerHTML = "";
  fetch("https://saurav.tech/NewsAPI/top-headlines/category/science/in.json")
    .then(
      function (res) {
        return res.json();
      },
      function (err) {
        console.log("Error in fetching Api!");
      }
    )
    .then(
      function (actualData) {
        console.log(actualData);
        for (let i = 0; i < actualData.articles.length; i++) {
          rowRef.innerHTML += `
        <div class="card p-3 mx-auto mb-3 newsbar" style="max-width:1000px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${actualData.articles[i].urlToImage}" width="100%" height="100%">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${actualData.articles[i].title}</h5>
                        <small class="text-muted">short by ${actualData.articles[i].author} / ${actualData.articles[i].publishedAt}</small>
                        <p class="card-text">${actualData.articles[i].description}</p>
                        <p class="card-text"><small class="text-muted">read more at <a href="${actualData.articles[i].url}" target="_blank">${actualData.articles[i].source.name}</a></small></p>
                    </div>
                </div>
            </div>
        </div>`;
        }
      },
      function (noData) {
        console.log("Error in iterate data!");
      }
    );
}

function fnSports() {
  rowRef.innerHTML = "";
  fetch("https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json")
    .then(
      function (res) {
        return res.json();
      },
      function (err) {
        console.log("Error in fetching Api!");
      }
    )
    .then(
      function (actualData) {
        console.log(actualData);
        for (let i = 0; i < actualData.articles.length; i++) {
          rowRef.innerHTML += `
        <div class="card p-3 mx-auto mb-3 newsbar" style="max-width:1000px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${actualData.articles[i].urlToImage}" width="100%" height="100%">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${actualData.articles[i].title}</h5>
                        <small class="text-muted">short by ${actualData.articles[i].author} / ${actualData.articles[i].publishedAt}</small>
                        <p class="card-text">${actualData.articles[i].description}</p>
                        <p class="card-text"><small class="text-muted">read more at <a href="${actualData.articles[i].url}" target="_blank">${actualData.articles[i].source.name}</a></small></p>
                    </div>
                </div>
            </div>
        </div>`;
        }
      },
      function (noData) {
        console.log("Error in iterate data!");
      }
    );
}

function fnTechnology() {
  rowRef.innerHTML = "";
  fetch("https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json")
    .then(
      function (res) {
        return res.json();
      },
      function (err) {
        console.log("Error in fetching Api!");
      }
    )
    .then(
      function (actualData) {
        console.log(actualData);
        for (let i = 0; i < actualData.articles.length; i++) {
          rowRef.innerHTML += `
        <div class="card p-3 mx-auto mb-3 newsbar" style="max-width:1000px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${actualData.articles[i].urlToImage}" width="100%" height="100%">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${actualData.articles[i].title}</h5>
                        <small class="text-muted">short by ${actualData.articles[i].author} / ${actualData.articles[i].publishedAt}</small>
                        <p class="card-text">${actualData.articles[i].description}</p>
                        <p class="card-text"><small class="text-muted">read more at <a href="${actualData.articles[i].url}" target="_blank">${actualData.articles[i].source.name}</a></small></p>
                    </div>
                </div>
            </div>
        </div>`;
        }
      },
      function (noData) {
        console.log("Error in iterate data!");
      }
    );
}

let dark = document.getElementById("dark");
dark.onclick = function () {
  document.body.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode")) {
    dark.src = "media/sun.png";
  } else {
    dark.src = "media/moon.png";
  }
};
