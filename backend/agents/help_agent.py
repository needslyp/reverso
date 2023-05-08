from .agnet_base import AgentBase

class HelpAgent(AgentBase):
  def __init__(self):
    super().__init__()

  def execute(self, input_str: list) -> str: # HELP агент
    answer = '''Я могу ответить на следующие вопросы: \n В каком году вышло аниме <название на английском>\n Какие аниме вышли в <число> году?\n Какие аниме вышли раньше <число> года?\n Какие аниме вышли позже <число> года?\n Аниме, у которых <число> серий?\n Аниме, у которых больше <число> серий?\n Аниме, у которых меньше <число> серий?\n Аниме, у которых <число> рейтинг?\n Аниме, у которых рейтинг больше <число>?\n Аниме, у которых рейтинг меньше <число>?\n Какие жанры у аниме <название на английском>?\n Какой рейтинг у аниме <название аниме на английском>?\n Сколько серий в аниме <название аниме на английском>?\nПасхалка:)'''
    return answer