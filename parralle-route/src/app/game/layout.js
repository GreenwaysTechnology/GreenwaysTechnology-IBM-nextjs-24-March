export default function GameLayout(props) {
    return <div id="gameslayout">
        {/* Game Page content */}
         {props.children}
         {/* Team Page */}
         {props.team}
         {/* Analytics Page */}
         {props.anaylitics}
    </div>
}