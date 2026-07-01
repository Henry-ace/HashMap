const Node = (key, value, nextNode) => {
  return {key, value, next: nextNode}
}


const hashMap = () => {
  const array = [];
  const capacity = 16;
  const loadFactor = 0.7;
  let size = 0
  
  const hash = (key) => {
    let hashcode = 0;
    
    for(let i = 0; i < key.length; i++) {
      hashcode += key.charCodeAt(i)
      hashcode = hashcode % capacity
    }
    
    console.log(key, hashcode)
    
    return hashcode
  }
  
  const setter = (key, value) => {
    
    if (size >= capacity * loadFactor) {
       console.log('bucket is full')
       return
    }else {
      size++
    }
    
    let index = hash(key)
    
    let head = array[index]
    
    if(head === undefined) {
      head = Node(key, value, null)
    }else {
      let current = head 
      while(current) {
        if(current.key === key) {
          return
        }
        current = current.nextNode
      }
      let next =  Node(key, value, head)
      head = next
    }
    
    array[index] = head
  }
  
  
  const getter = (key) => {
    const index = hash(key)
    let current = array[index]
    
    if(!current) {
      console.log('key not found')
      return
    }
    
    while(current) {
      if(current.key === key) {
        console.log(current.value)
        return
      }
        current = current.next
      }
    
    console.log('key not found')
  }
  
  
  
  const displayArray = () => {
    console.log(array)
  }
  
  
  return {hash, setter, displayArray, getter}
}


const map = hashMap()

map.setter('henry', 'nigerian')
map.setter('dorathy', '25')
map.setter('chuckwuebuka', '40')
map.setter('promise','onoja')
map.setter('praise','123')
map.setter('god','1M')
map.setter('dog','8')

map.getter('promise')
map.displayArray()