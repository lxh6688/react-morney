import {useState} from "react";
import {createdId} from "lib/createdId";

const defaultTags = [
  {id: createdId(), name: '衣'},
  {id: createdId(), name: '食'},
  {id: createdId(), name: '住'},
  {id: createdId(), name: '行'},
]
const useTags = () => { // 封装一个自定义 Hook
  const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0]
  const findTagIndex = (id: number) => {
    let result = -1
    for(let i = 0; i < tags.length; i++){
      if(tags[i].id === id){
        result = i
        break;
      }
      return result;
    }
  }
  const updateTag = (id: number, obj: {name: string}) => {
    const index = findTagIndex(id)
    const tagsClone = JSON.parse(JSON.stringify(tags))
    tagsClone.splice(index, 1, {id: id, name: obj.name} )
    setTags(tagsClone)
  }
  return {tags, setTags, findTag, updateTag}
}

export {useTags}