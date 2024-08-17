function createTags(){
  let tags = $state([]);


  return {
    get tags(){
      return tags;
    },
    set tags(value){
      tags=value;
    }
  }
}

export const tagsState = createTags();

