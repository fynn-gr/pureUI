export default function PropCheckbox (prop:any) {
    return(
        <div class="checkbox prop">
            <input type="checkbox"></input>
            <p class="checkboxDesc">{prop.desc}</p>
        </div>
    );
}