let array = [{keyword: "Мир"},
 {keyword: "Мир"},
 {keyword: "Мир"},
 {keyword: "протест"},
{keyword: "велосипед"},
{keyword: "еда"},
    {keyword: "еда"}]

    const toArray = (arr) => {
let abb = []
arr.map(e => abb.push(e.keyword))
let once = []
let twice = []
abb.filter(e => function(e) {
  if (abb.includes(e)) {
    twice.push(e)
  }
  else once.push(e)
})

      console.log(once)
console.log(twice)

    }

    toArray(array)
