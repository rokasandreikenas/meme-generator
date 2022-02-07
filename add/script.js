fetch("http://localhost:3000/memes", {
  method: "POST",
  body: JSON.stringify({
    title: "Test title",
    subtitle: "Test subtitle",
    src: "https://cdn.vox-cdn.com/thumbor/r26X7f8EuoS5YQHoYs15mQqfYAY=/0x0:1800x1179/1400x1050/filters:focal(676x269:964x557):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66741310/3zlqxf_copy.0.jpg",
  }),
  headers: { "Content-type": "application/json; charset=UTF-8" },
});
