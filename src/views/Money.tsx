import Layout from "../components/Layout";
import React, {useState} from "react";
import styled from "styled-components";
import {TagsSection} from './Money/TagsSection';
import {CategorySection} from './Money/CategorySection';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {useRecords} from "../hooks/useRecords";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

type Category = '-' | '+'

const defaultFormDate = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0
}

function Money() {
  const [selected, setSelected] = useState(defaultFormDate)
  const {records, addRecord} = useRecords()
  type Selected = typeof selected;
  const onChange = (obj: Partial<Selected>)=>{
    setSelected({ ...selected, ...obj })
  }
  const submit = () => {
    addRecord(selected)
    alert('保存成功')
    setSelected(defaultFormDate)
  }
  return (
    <MyLayout>
      <TagsSection value={selected.tagIds}
                   onChange={tagIds => onChange({tagIds})}/>
      <NoteSection value={selected.note}
                   onChange={note => onChange({note})}/>
      <CategorySection value={selected.category}
                       onChange={category => onChange({category})}/>
      <NumberPadSection value={selected.amount}
                        onChange={amount => onChange({amount})}
                        onOK={() =>{submit()}}
      />
    </MyLayout>
  )
}

export default Money;