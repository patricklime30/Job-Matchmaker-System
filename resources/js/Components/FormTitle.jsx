export default function FormTitle({title, description}){
    return (
        <div>
            <h1 className="text-center mb-2 text-gray-700 capitalize font-bold text-2xl">{ title }</h1>
            <p className="text-gray-600 text-sm mb-6 text-center">{ description }</p>
        </div>
    );
}
