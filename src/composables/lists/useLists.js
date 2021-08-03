import ListsService from "../../domain/list/lists.service";
import CardsService from "../../domain/cards/cards.service";

const listsService = new ListsService();
const cardsService = new CardsService();

export default function useLists() {
  const loadAll = async () => {
    const { data: lists } = await listsService.get();
    const listWithCards = lists.map(async (list) => {
      const { data: cards } = await cardsService.get(list.id);
      return { ...list, cards };
    });
    return await Promise.all(listWithCards);
  };

  const create = async (card) => {
    const { data: createdCard } = await cardsService.post(card);
    return createdCard;
  };

  const remove = async (id) => {
    cardsService.delete(id);
  };

  return { loadAll, create, remove };
}
