import { Badge, Button } from "react-bootstrap";

export default function PillboxList(props) {
    const {items, onCancelClick, uniqueType} = props;

    return (
        items.map((item)=>{
            return <Badge pill bg="primary" className="rounded-pill" key={uniqueType+'-'+item.id}>
            {item.label}
            <Button variant="primary" className="p-0 m-0" onClick={()=>onCancelClick(item.id)}><i className="bi bi-x p-0 m-0"></i></Button>
          </Badge>
        })
        
    )
}