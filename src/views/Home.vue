<template>
  <div>
    <div class="bgimg"></div>
    <div>
      <b-navbar type="dark" variant="dark"></b-navbar>
        <div class="container jumbotron text-center" style="background:transparent !important">
          <h1>Album example</h1>
          <p class="lead text-muted">
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don’t simply skip over it entirely.
          </p>
          <p>
            <a href="#" class="btn btn-primary my-2">Main call to action</a>
          </p>
        </div>
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <b-card
                img-src="https://cdn.estnn.com/wp-content/uploads/2019/02/26015157/League-of-Legends-Stats-1-1024x576.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-card-text>
                  Latest Meta Compositions
                </b-card-text>
              </b-card>
            </div>
            <div class="col-md-3">
              <b-card
                img-src="https://cdn.vox-cdn.com/thumbor/U2K5Ted3qrxi8Z_wsJ8hKxFSldU=/0x0:1215x717/1200x800/filters:focal(646x239:840x433)/cdn.vox-cdn.com/uploads/chorus_image/image/52069021/angry_babies.0.png"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-card-text>
                  Champion List
                </b-card-text>
              </b-card>
            </div>
            <div class="col-md-3">
              <b-card
                img-src="https://www.hotspawn.com/app/uploads/2019/06/qiyana-1024x576.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-card-text>
                  Item List
                </b-card-text>
              </b-card>
            </div>
            <div class="col-md-3">
              <b-card
                img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvuJfte3ym1Fhj5FTFSzH-UaWIXhhgC2tHssNl3jTjJ8M_WQ5t&usqp=CAU"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-card-text>
                  Player Data
                </b-card-text>
              </b-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
};
</script>

<style scoped>
.bgimg {
  background-image: url('~@/assets/background.png');
  height: 420px;
}
</style>
