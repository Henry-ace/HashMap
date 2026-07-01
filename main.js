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
    
    return hashcode
  }
  
  const setter = (key, value) => {
    
    if (size >= capacity * loadFactor) {
       return 'bucket is full'
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
      return 'key not found'
      
    }
    
    while(current) {
      if(current.key === key) {
        return current.value
      }
        current = current.next
      }
    
    return 'key not found'
  }
  
  
  const has = (key) => {
    const index = hash(key)
    let current = array[index]
    
     if(!current) {
      console.log('key not found')
      return
    }
    
    while(current) {
      if(current.key === key) {
        return true
      }
        current = current.next
      }
    
    return false
  }
  
const remove = (key) => {
  const index = hash(key)
  let current = array[index]
  
  if (!current) {
    return 'key does not exist'
  }
  
  if (current.key === key) {
    array[index] = current.next
    return
  }
  
  while (current.next) {
    if (current.next.key === key) {
      current.next = current.next.next
      return
    }
    current = current.next
  }
  
  return 'key does not exist'
}
  
  const displayArray = () => {
    console.log(array)
  }
  
  
  return {hash, setter, displayArray, getter, has, remove}
}

const map = hashMap()

map.setter('henry', 'nigerian')
map.setter('dorathy', '25')
map.setter('chuckwuebuka', '40')
map.setter('promise','onoja')
map.setter('praise','123')
map.setter('god','1M')
map.setter('dog', '8')
map.setter('ace','16')
map.setter('dad', '50')
map.setter('ebb', '3')

map.remove('ebb')

map.displayArray()

