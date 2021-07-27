import Card from '../../KnowledgeCard';

const Bulma = ({ fill = '#fff' }) => {
    return (
        <Card alt='Bulma'>
            <path fill={fill} d='M59.2 0l40 40-24 24 32 31.9L59.4 128l-40-39.9 7.7-56z'></path>
        </Card>
    );
};

export default Bulma;
