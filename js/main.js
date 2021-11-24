let lists = [
  '的意义是太空、风和尝试被改变的命运。',
  '的意义是腐烂、束缚和"我爱你。"。',
  '的意义是波浪、喵喵和"我是不是在哪见过你?"。',
  '的意义是诗集、波涛汹涌和你自己。',
  '的意义是宇宙、血液和虚无主义。',
  '的意义是程序、摇篮曲和死在岩石里。'
];




let input = document.querySelector('input')
let btn = document.querySelector('.btn')
let text = document.querySelector('.text-wrapper')
btn.addEventListener('click', () => {
  let msg = lists[Math.floor(Math.random() * lists.length)];
  let inputVal = input.value + msg
  console.log(inputVal);
  text.innerHTML = inputVal
})